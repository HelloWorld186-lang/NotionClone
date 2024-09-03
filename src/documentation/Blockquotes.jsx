import React from 'react'
import CodeExample from '../component/CodeExample'
import CodeShowing from '../component/CodeShowing'

const Blockquotes = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4  space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Blockquotes in Markdown
      </h2>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Basic Blockquotes</h3>
        <p className="text-gray-700 text-lg mb-4">Use <code className="bg-gray-100 px-2 py-1 rounded">&gt;</code> before the text.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample
            language="markdown"
            codeString={`> This is a blockquote.`}
          />
          <CodeShowing
            heading="Preview"
            content={`> This is a blockquote.`}
          />
        </div>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Nested Blockquotes</h3>
        <p className="text-gray-700 text-lg mb-4">Use multiple <code className="bg-gray-100 px-2 py-1 rounded">&gt;</code> characters.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample
            language="markdown"
            codeString={`> A blockquote with\n> > Nested blockquote`}
          />
          <CodeShowing
            heading="Preview"
            content={`> A blockquote with\n> > Nested blockquote`}
          />
        </div>
      </section>
    </div>
  )
}

export default Blockquotes
