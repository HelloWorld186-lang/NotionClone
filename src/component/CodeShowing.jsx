import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const CodeShowing = ({ heading, content }) => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10 shadow-lg rounded-lg overflow-hidden border border-gray-300">
      {/* Top Bar */}
      <div className="bg-gray-100 flex justify-between items-center py-2 px-3 sm:py-3 sm:px-4">
        {/* Traffic lights */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
          <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
          <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-2 sm:mx-4">
          <div className="flex items-center bg-white border border-gray-400 rounded-full px-2 py-1 sm:px-3 sm:py-1">
            <IoSearch className="text-gray-600 mr-1 sm:mr-2 text-sm sm:text-base" />
            <span className="text-gray-600 text-xs sm:text-sm truncate">{heading}</span>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <FaChevronLeft className="text-gray-500 cursor-pointer hover:text-black text-sm sm:text-base" />
          <FaChevronRight className="text-gray-500 cursor-pointer hover:text-black text-sm sm:text-base" />
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white p-3 sm:p-4 text-gray-800">
        <div className="prose max-w-none bg-gray-100 p-2 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default CodeShowing;