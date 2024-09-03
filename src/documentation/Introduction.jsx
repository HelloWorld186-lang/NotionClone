import React from 'react'

const Introduction = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Introduction to Markdown
      </h2>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">What is Markdown?</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-gray-700 text-lg">A lightweight markup language for formatting plain text.</span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-700 text-lg">Commonly used for writing README files, blogs, forums, and more.</span>
          </li>
        </ul>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Why Use Markdown?</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-gray-700 text-lg">Simple syntax for creating formatted text.</span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-700 text-lg">Widely supported and easy to learn.</span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-700 text-lg">Portable across different platforms and tools.</span>
          </li>
        </ul>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Basic Syntax Overview</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-gray-700 text-lg">Emphasizing text, creating lists, adding links, and more.</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Introduction