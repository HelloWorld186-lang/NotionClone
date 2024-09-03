import React from 'react'

const MarkdownUseCases = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Markdown Use Cases
      </h2>
      <div className="space-y-6">
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Documentation</h3>
          <p className="text-gray-700 text-lg">Writing documentation for software projects.</p>
        </section>
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Blogs and Articles</h3>
          <p className="text-gray-700 text-lg">Creating blog posts or articles.</p>
        </section>
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Notes and To-Do Lists</h3>
          <p className="text-gray-700 text-lg">Using Markdown for personal notes and task lists.</p>
        </section>
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Presentations</h3>
          <p className="text-gray-700 text-lg">Creating slide decks using Markdown-based tools.</p>
        </section>
      </div>
    </div>
  )
}

export default MarkdownUseCases