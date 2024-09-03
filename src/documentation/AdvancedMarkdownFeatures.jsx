import React from 'react'
import CodeExample from '../component/CodeExample'
import CodeShowing from '../component/CodeShowing'

const AdvancedMarkdownFeatures = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4  space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Advanced Markdown Features
      </h2>
      <div className="space-y-6">
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">HTML in Markdown</h3>
          <p className="text-gray-700 text-lg mb-4">Markdown allows embedding HTML directly.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CodeExample
              language="markdown"
              codeString={`<div style="color: red;">This text is red.</div>`}
            />
            <CodeShowing
              heading="Preview"
              content={`<div style="color: red;">This text is red.</div>`}
            />
          </div>
        </section>
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Footnotes</h3>
          <p className="text-gray-700 text-lg mb-4">Adding footnotes for additional context.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CodeExample
              language="markdown"
              codeString={`Here is a footnote reference.[^1]\n\n[^1]: This is the footnote.`}
            />
            <CodeShowing
              heading="Preview"
              content={`Here is a footnote reference.[^1]\n\n[^1]: This is the footnote.`}
            />
          </div>
        </section>
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Definition Lists</h3>
          <p className="text-gray-700 text-lg mb-4">Some Markdown processors support definition lists.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CodeExample
              language="markdown"
              codeString={`Term 1\n: Definition 1\n\nTerm 2\n: Definition 2`}
            />
            <CodeShowing
              heading="Preview"
              content={`Term 1\n: Definition 1\n\nTerm 2\n: Definition 2`}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdvancedMarkdownFeatures