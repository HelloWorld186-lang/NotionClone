import React from 'react'
import CodeExample from '../component/CodeExample'
import CodeShowing from '../component/CodeShowing'

const Tables = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Tables in Markdown
      </h2>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Basic Table Syntax</h3>
        <p className="text-gray-700 text-lg mb-4">Use <code className="bg-gray-100 px-2 py-1 rounded">|</code> to separate columns and <code className="bg-gray-100 px-2 py-1 rounded">-</code> for the header row.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample
            language="markdown"
            codeString={`| Header 1 | Header 2 |\n| -------- | -------- |\n| Row 1 Col 1 | Row 1 Col 2 |\n| Row 2 Col 1 | Row 2 Col 2 |`}
          />
          <CodeShowing
            heading="Preview"
            content={`| Header 1 | Header 2 |\n| -------- | -------- |\n| Row 1 Col 1 | Row 1 Col 2 |\n| Row 2 Col 1 | Row 2 Col 2 |`}
          />
        </div>
      </section>
    </div>
  )
}

export default Tables