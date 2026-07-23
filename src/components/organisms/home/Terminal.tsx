'use client';

import { useTheme } from '@/hooks/useTheme';
import React, { useEffect, useMemo, useState } from 'react';
import TerminalFrame from '@/components/molecules/TerminalFrame/TerminalFrame';
import SyntaxHighlighter from 'react-syntax-highlighter';

// Dark theme: colours taken from martacodes-hero-iteration.html
const customDark: { [key: string]: React.CSSProperties } = {
  hljs:                  { background: 'transparent', color: '#E2E8F0' },
  'hljs-keyword':        { color: '#C792EA' },
  'hljs-title':          { color: '#82AAFF' },
  'hljs-title.class_':   { color: '#82AAFF' },
  'hljs-title.function_':{ color: '#82AAFF' },
  'hljs-string':         { color: '#C3E88D' },
  'hljs-number':         { color: '#F78C6C' },
  'hljs-attr':           { color: '#FFCB6B' },
  'hljs-property':       { color: '#FFCB6B' },
  'hljs-comment':        { color: '#5B6886', fontStyle: 'italic' },
  'hljs-punctuation':    { color: '#A6ACCD' },
  'hljs-operator':       { color: '#A6ACCD' },
  'hljs-built_in':       { color: '#82AAFF' },
  'hljs-literal':        { color: '#F78C6C' },
  'hljs-type':           { color: '#82AAFF' },
  'hljs-variable':       { color: '#E2E8F0' },
  'hljs-params':         { color: '#E2E8F0' },
  'hljs-meta':           { color: '#7B89A8' },
  'hljs-tag':            { color: '#C792EA' },
  'hljs-name':           { color: '#C792EA' },
  'hljs-symbol':         { color: '#FFCB6B' },
};

// Light theme: same hues darkened for contrast on light background
const customLight: { [key: string]: React.CSSProperties } = {
  hljs:                  { background: 'transparent', color: '#14213D' },
  'hljs-keyword':        { color: '#7C3AED' },
  'hljs-title':          { color: '#1D4ED8' },
  'hljs-title.class_':   { color: '#1D4ED8' },
  'hljs-title.function_':{ color: '#1D4ED8' },
  'hljs-string':         { color: '#15803D' },
  'hljs-number':         { color: '#C2410C' },
  'hljs-attr':           { color: '#A16207' },
  'hljs-property':       { color: '#A16207' },
  'hljs-comment':        { color: '#6B7280', fontStyle: 'italic' },
  'hljs-punctuation':    { color: '#4B5563' },
  'hljs-operator':       { color: '#4B5563' },
  'hljs-built_in':       { color: '#1D4ED8' },
  'hljs-literal':        { color: '#C2410C' },
  'hljs-type':           { color: '#0F766E' },
  'hljs-variable':       { color: '#14213D' },
  'hljs-params':         { color: '#14213D' },
  'hljs-meta':           { color: '#6B7280' },
  'hljs-tag':            { color: '#7C3AED' },
  'hljs-name':           { color: '#7C3AED' },
  'hljs-symbol':         { color: '#A16207' },
};
import type { CodeSnippet } from '@/types/CodeSnippet';
import Typed from 'typed.js';
import type { TypedOptions } from 'typed.js';

// File extension shown in the terminal bar, per snippet language.
// Languages missing here fall back to the language name itself.
const fileExtensions: { [language: string]: string } = {
  angular: 'component.ts',
  bash: 'sh',
  csharp: 'cs',
  kotlin: 'kt',
  makefile: 'mk',
  python: 'py',
  react: 'jsx',
  rust: 'rs',
  typescript: 'ts',
  yaml: 'yml',
};

const fileNameFor = (snippet?: CodeSnippet) =>
  snippet ? `marta.${fileExtensions[snippet.language] ?? snippet.language}` : 'marta.info';

// Live caret position, read straight off the text typed.js has emitted so far.
const CaretPosition = () => {
  const [caret, setCaret] = useState({ line: 1, col: 1 });

  useEffect(() => {
    const interval = setInterval(() => {
      const lines = (document.getElementById('typed')?.textContent ?? '').split('\n');
      const line = lines.length;
      const col = lines[lines.length - 1].length + 1;
      // Same object when nothing moved, so idle ticks don't re-render
      setCaret((prev) => (prev.line === line && prev.col === col ? prev : { line, col }));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      Ln {caret.line}, Col {caret.col}
    </span>
  );
};

export interface CodeSnippetsProps {
  codeSnippets: CodeSnippet[];
  updatedAt: string;
}

// Same source as the "Last update" stamps elsewhere on the site: the newest
// file timestamp, which on a fresh deploy is the deploy itself
const formatUpdatedAt = (isoTimestamp: string) =>
  new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .format(new Date(isoTimestamp));

const Terminal = ({ codeSnippets, updatedAt }: CodeSnippetsProps) => {
  const [loading, setLoading] = useState(true);
  const [activeLanguage, setActiveLanguage] = useState(codeSnippets[0]?.language);
  const { theme } = useTheme();

  const ideStyle = theme === 'dark' ? customDark : customLight;
  const currentSnippet =
    codeSnippets.find((snippet) => snippet.language === activeLanguage) ?? codeSnippets[0];

  // The snippet on screen is read back off the DOM rather than from a typed.js
  // callback: preStringTyped never fires for these strings, because they open
  // with a tag and typed.js only fires it when typing resumes at position 0.
  useEffect(() => {
    const interval = setInterval(() => {
      const highlighted = document.querySelector('#typed code[class*="language-"]');
      const language = highlighted?.className.match(/language-(\S+)/)?.[1];
      // Mid-transition the tag is incomplete, so keep the last known language
      if (language) setActiveLanguage(language);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  // Highlighted once per theme change, so updating the file name on each
  // snippet doesn't re-run the highlighter over the whole list.
  const highlightedSnippets = useMemo(
    () =>
      codeSnippets.map((snippet) => (
        <SyntaxHighlighter
          className='text-xs md:text-base'
          key={snippet.id}
          language={snippet.language}
          style={ideStyle}
          wrapLongLines={true}
        >
          {snippet.code}
        </SyntaxHighlighter>
      )),
    [codeSnippets, ideStyle]
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (!loading) {
      const typedStringsElement = document.getElementById('typed-strings');
      const typedElement = document.getElementById('typed');

      if (typedStringsElement && typedElement) {
        const typedOptions: TypedOptions = {
          stringsElement: '#typed-strings',
          typeSpeed: 40,
          backSpeed: 10,
          backDelay: 5000,
          loop: true,
          loopCount: 0,
          smartBackspace: true,
          showCursor: true,
          cursorChar: '_',
        };

        const typed = new Typed(typedElement, typedOptions);

        // Clean up the Typed.js instance when the component unmounts
        return () => {
          typed.destroy();
        };
      }
    }
  }, [loading, theme]);

  return (
    <TerminalFrame
        className='w-full lg:w-1/2 h-65 lg:h-78 drop-shadow-lg'
        fileName={fileNameFor(currentSnippet)}
        fileMeta={`last modified ${formatUpdatedAt(updatedAt)}`}
        statusBar={
          <>
            <CaretPosition />
            <span className='ml-auto flex items-center gap-2'>
              <span>UTF-8</span>
              <span>·</span>
              <span>LF</span>
              <span className='hidden sm:inline'>·</span>
              <span
                className='hidden sm:inline'
                title="psst — there's something waiting in the console"
              >
                F12 👀
              </span>
            </span>
          </>
        }
    >
      <div className='h-full border-double bg-terminal-light dark:bg-terminal-dark px-4 pt-2.5 pb-2'>
        <div id='typed-strings' style={{ display: 'none' }}>
          {loading ? <span className='cursor-blink'>_</span> : null}
          {!loading && highlightedSnippets}
        </div>
        <span id='typed'></span>
      </div>
    </TerminalFrame>
  );
};

export default Terminal;
