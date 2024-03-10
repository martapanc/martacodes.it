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

const Terminal = ({ codeSnippets }: CodeSnippetsProps) => {
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
    <div className='w-full lg:w-1/2 h-60 lg:h-[288px] me-4 drop-shadow-lg'>
      <div className='bg-terminal-bar-light dark:bg-terminal-bar-dark h-5 rounded-t-lg px-4 py-1 flex'>
        <div className='w-[12px] h-[12px] rounded-full me-1.5 bg-terminal-red'></div>
        <div className='w-[12px] h-[12px] rounded-full me-1.5 bg-terminal-amber'></div>
        <div className='w-[12px] h-[12px] rounded-full me-1.5 bg-terminal-green'></div>
      </div>
      <div className='h-56 rounded-b-lg border-double bg-terminal-light dark:bg-terminal-dark px-4 pt-2.5 pb-6 lg:h-[264px]'>
        <div id='typed-strings'>
          {loading ? <span className='cursor-blink'>_</span> : null}
          {!loading &&
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
            ))}
        </div>
        <span id='typed'></span>
      </div>
    </div>
  );
};

export default Terminal;
