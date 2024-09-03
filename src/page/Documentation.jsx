import React, { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
// Import all documentation components
import Introduction from '../documentation/Introduction';
import GetStarted from '../documentation/GetStarted';
import Formatting from '../documentation/Formating';
import List from '../documentation/List';
import LinkImages from '../documentation/LinkImages';
import CodeHighlighting from '../documentation/CodeHighlighting';
import Blockquotes from '../documentation/Blockquotes';
import Tables from '../documentation/Tables';
import TaskLists from '../documentation/TaskLists';
import AdvancedMarkdownFeatures from '../documentation/AdvancedMarkdownFeatures';
import MarkdownVariants from '../documentation/MarkdownVariants';
import MarkdownEditors from '../documentation/MarkdownEditors';
import TipsandBestPractices from '../documentation/TipsandBestPractices';
import MarkdownUseCases from '../documentation/MarkdownUseCases';
import Conclusion from '../documentation/Conclusion';
import FurtherReadingandResources from '../documentation/FurtherReadingandResources';

const Documentation = () => {
  const [activeComponent, setActiveComponent] = useState('Introduction to Markdown');
  const [searchTerm, setSearchTerm] = useState('');
  const [loadedComponents, setLoadedComponents] = useState({});

  const documentationComponents = {
    "Introduction to Markdown": Introduction,
    "Getting Started with Markdown": GetStarted,
    "Text Formatting": Formatting,
    "List": List,
    "Links and Images": LinkImages,
    "Code and Syntax Highlighting": CodeHighlighting,
    "Blockquotes": Blockquotes,
    "Tables": Tables,
    "Task Lists": TaskLists,
    "Advanced Markdown Features": AdvancedMarkdownFeatures,
    "Markdown Variants and Extensions": MarkdownVariants,
    "Markdown Editors and Tools": MarkdownEditors,
    "Tips and Best Practices": TipsandBestPractices,
    "Markdown Use Cases": MarkdownUseCases,
    "Conclusion": Conclusion,
    "Further Reading and Resources": FurtherReadingandResources,
  };

  useEffect(() => {
    // Load all components
    Object.entries(documentationComponents).forEach(([key, Component]) => {
      setLoadedComponents(prev => ({ ...prev, [key]: <Component /> }));
    });
  }, []);

  const filteredHeadings = Object.keys(documentationComponents).filter(heading =>
    heading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-grow flex flex-col md:flex-row p-4 space-x-0 md:space-x-4">
        <aside className="w-full md:w-1/4 lg:w-1/5 bg-white rounded-lg shadow-md p-4 mb-4 md:mb-0">
          <div className="mb-4 flex items-center bg-gray-100 rounded-md">
            <IoSearch className="ml-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 bg-transparent rounded-md focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <nav>
            <ul className="space-y-2">
              {filteredHeadings.map((heading) => (
                <li key={heading}>
                  <button
                    onClick={() => setActiveComponent(heading)}
                    className={`w-full text-left p-2 rounded-md transition-colors duration-200 ${
                      activeComponent === heading
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {heading}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="w-full md:w-3/4 lg:w-4/5 bg-white rounded-lg shadow-md p-6 overflow-auto">
          {loadedComponents[activeComponent]}
        </main>
      </div>
    </div>
  );
};

export default Documentation;