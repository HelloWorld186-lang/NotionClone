import React from 'react'
import CodeExample from '../component/CodeExample'
import CodeShowing from '../component/CodeShowing'

const Lists = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Lists in Markdown
      </h2>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Unordered Lists</h3>
        <p className="text-gray-700 text-lg mb-4">Use <code className="bg-gray-100 px-2 py-1 rounded">* </code> <span className='inline-flex bg-white'> </span> <code className="bg-gray-100 px-2 py-1 rounded"> + </code>or <code className="bg-gray-100 px-2 py-1 rounded">-</code> followed by a space.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample
            language="markdown"
            codeString={`* Item 1\n* Item 2\n  * Subitem 2.1`}
          />
          <CodeShowing
            heading="Preview"
            content={`* Item 1\n* Item 2\n  * Subitem 2.1`}
          />
        </div>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Ordered Lists</h3>
        <p className="text-gray-700 text-lg mb-4">Use numbers followed by a period.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample
            language="markdown"
            codeString={`1. First item\n2. Second item`}
          />
          <CodeShowing
            heading="Preview"
            content={`1. First item\n2. Second item`}
          />
        </div>
      </section>
    </div>
  )
}

export default Lists