import React from 'react'

const TipsandBestPractices = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Tips and Best Practices
      </h2>
      <div className="space-y-6">
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Keep It Simple</h3>
          <p className="text-gray-700 text-lg">Stick to the standard Markdown features for better compatibility.</p>
        </section>
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Use Meaningful Headings</h3>
          <p className="text-gray-700 text-lg">Organize content with appropriate headings for better readability.</p>
        </section>
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Consistent Formatting</h3>
          <p className="text-gray-700 text-lg">Use consistent formatting for similar elements across the document.</p>
        </section>
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Preview Regularly</h3>
          <p className="text-gray-700 text-lg">Use Markdown preview to see how the document will render.</p>
        </section>
      </div>
    </div>
  )
}

export default TipsandBestPractices