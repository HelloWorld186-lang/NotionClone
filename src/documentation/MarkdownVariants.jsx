import React from 'react'

const MarkdownVariants = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Markdown Variants and Extensions
      </h2>
      <div className="space-y-6">
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">GitHub Flavored Markdown (GFM)</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Commonly used on GitHub for README files.</li>
            <li>Supports tables, task lists, and strikethrough.</li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">CommonMark</h3>
          <p className="text-gray-700 text-lg">A standardized Markdown specification.</p>
        </section>
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Markdown Extra</h3>
          <p className="text-gray-700 text-lg">An extended version of Markdown with additional features like footnotes and tables.</p>
        </section>
      </div>
    </div>
  )
}

export default MarkdownVariants