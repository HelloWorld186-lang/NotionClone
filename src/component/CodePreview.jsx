import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const CodePreview = ({ content }) => {
  return (
    <div className="bg-white p-3 sm:p-4 text-gray-800">
      <div className="prose max-w-none bg-gray-100 p-2 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default CodePreview;
