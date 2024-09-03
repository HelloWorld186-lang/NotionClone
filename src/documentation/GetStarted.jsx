import React from 'react'
import CodeExample from '../component/CodeExample'
import CodeShowing from '../component/CodeShowing'

const GetStarted = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4  space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Getting Started with Markdown
      </h2>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">How to Write Markdown</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-gray-700 text-lg">Use any plain text editor (e.g., VS Code, Sublime Text).</span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-700 text-lg">Online Markdown editors like Dillinger or StackEdit.</span>
          </li>
        </ul>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Markdown File Extension</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-gray-700 text-lg">Files typically use the <code className="bg-gray-100 px-2 py-1 rounded">.md</code> or <code className="bg-gray-100 px-2 py-1 rounded">.markdown</code> extension.</span>
          </li>
        </ul>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Basic Formatting</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-3 text-gray-700">Headings</h4>
            <p className="text-gray-600 mb-4">Use <code className="bg-gray-100 px-2 py-1 rounded">#</code> for headings.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CodeExample
                language="markdown"
                codeString={`# Heading 1\n## Heading 2\n### Heading 3`}
              />
              <CodeShowing
                heading="Preview"
                content={`# Heading 1\n## Heading 2\n### Heading 3`}
              />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3 text-gray-700">Paragraphs</h4>
            <p className="text-gray-600">Just write the text.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3 text-gray-700">Line Breaks</h4>
            <p className="text-gray-600">End a line with two or more spaces.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetStarted