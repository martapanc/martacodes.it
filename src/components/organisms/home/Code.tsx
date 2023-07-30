'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atomOneLight,
  darcula,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Typed, { TypedOptions } from 'typed.js';

import { CodeSnippet } from '@/types/CodeSnippet';

export interface CodeSnippetsProps {
  codeSnippets: CodeSnippet[];
}

const Code = ({ codeSnippets }: CodeSnippetsProps) => {
  const [loading, setLoading] = useState(true);

  const { theme } = useTheme();

  const ideStyle = theme === 'dark' ? darcula : atomOneLight;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
  }, [loading]);

  return (
    <div className='h-92 me-4 w-full rounded border-double bg-slate-200 px-4 pb-12 pt-6 dark:bg-slate-800 md:w-1/2'>
      <div id='typed-strings'>
        {loading ? <span className='cursor-blink'>_</span> : null}
        {!loading &&
          codeSnippets.map((snippet) => (
            <SyntaxHighlighter
              className='text-xs md:text-base'
              key={snippet._id}
              language={snippet.language}
              style={ideStyle}
              wrapLongLines={true}
            >
              {snippet.code}
            </SyntaxHighlighter>
          ))}
      </div>
      <span id='typed'></span>
    </div>
  );
};

export default Code;
