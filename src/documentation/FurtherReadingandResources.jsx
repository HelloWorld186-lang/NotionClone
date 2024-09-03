import React from 'react'

const FurtherReadingandResources = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Further Reading and Resources
      </h2>
      <div className="space-y-6">
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Books</h3>
          <ul className="space-y-2 text-gray-700">
            <li>"Markdown Guide" by Matt Cone</li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Websites</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="https://commonmark.org/" className="text-blue-600 hover:underline">CommonMark</a></li>
            <li><a href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax" className="text-blue-600 hover:underline">GitHub Markdown Guide</a></li>
            <li><a href="https://www.markdownguide.org/" className="text-blue-600 hover:underline">Markdown Guide</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default FurtherReadingandResources