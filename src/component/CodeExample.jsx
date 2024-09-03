import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeExample = ({ language, codeString }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10 rounded-lg overflow-hidden shadow-lg border border-gray-300">
      <div className="bg-gray-100 flex justify-between items-center py-2 px-3 sm:py-3 sm:px-4">
        <span className="text-sm sm:text-base font-medium text-gray-700">
          {language.charAt(0).toUpperCase() + language.slice(1)}
        </span>
        <button
          onClick={toggleTheme}
          className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm text-white rounded 
                     bg-gradient-to-bl from-[#FC6D2E] to-[#E83D65] 
                     hover:from-[#fd845a] hover:to-[#ec6785] 
                     transition-all duration-300 ease-in-out 
                     transform hover:scale-105"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="relative">
        <SyntaxHighlighter 
          language={language} 
          style={isDarkMode ? vscDarkPlus : vs}
          customStyle={{
            margin: 0,
            padding: '1rem',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeExample;