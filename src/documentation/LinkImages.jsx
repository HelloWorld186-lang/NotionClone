import React from 'react'
import CodeExample from '../component/CodeExample'
import CodeShowing from '../component/CodeShowing'

const LinkImages = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Links and Images in Markdown
      </h2>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Links</h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="text-gray-700 text-lg">Inline links: <code className="bg-gray-100 px-2 py-1 rounded">[link text](URL)</code></span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-700 text-lg">Reference links: <code className="bg-gray-100 px-2 py-1 rounded">[link text][1]</code></span>
          </li>
        </ul>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample
            language="markdown"
            codeString={`[OpenAI](https://www.openai.com)`}
          />
          <CodeShowing
            heading="Preview"
            content={`[OpenAI](https://www.openai.com)`}
          />
        </div>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Images</h3>
        <p className="text-gray-700 text-lg mb-4">Inline images: <code className="bg-gray-100 px-2 py-1 rounded">![alt text](image URL)</code></p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample
            language="markdown"
            codeString={`![Markdown Logo](https://markdown-here.com/img/icon256.png)`}
          />
          <CodeShowing
            heading="Preview"
            content={`![Markdown Logo](https://markdown-here.com/img/icon256.png)`}
          />
        </div>
      </section>
    </div>
  )
}

export default LinkImages
