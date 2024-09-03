import React from 'react'
import CodeExample from '../component/CodeExample'
import CodeShowing from '../component/CodeShowing'

const Formatting = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Text Formatting
      </h2>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Bold and Italics</h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="text-gray-700 text-lg"><strong>Bold:</strong> <code className="bg-gray-100 px-2 py-1 rounded">**bold text**</code> or <code className="bg-gray-100 px-2 py-1 rounded">__bold text__</code></span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-700 text-lg"><em>Italics:</em> <code className="bg-gray-100 px-2 py-1 rounded">*italic text*</code> or <code className="bg-gray-100 px-2 py-1 rounded">_italic text_</code></span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-700 text-lg"><strong><em>Bold Italics:</em></strong> <code className="bg-gray-100 px-2 py-1 rounded">***bold and italic***</code></span>
          </li>
        </ul>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample 
            language="markdown"
            codeString={`**Bold Text**\n*Italic Text*\n***Bold and Italic Text***`}
          />
          <CodeShowing 
            heading="Bold and Italic Text" 
            content={`**Bold Text**\n*Italic Text*\n***Bold and Italic Text***`} 
          />
        </div>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Strikethrough</h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="text-gray-700 text-lg">Use <code className="bg-gray-100 px-2 py-1 rounded">~~text~~</code> to create strikethrough.</span>
          </li>
        </ul>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample 
            language="markdown"
            codeString={`~~Strikethrough Text~~`}
          />
          <CodeShowing 
            heading="Strikethrough" 
            content={`~~Strikethrough Text~~`} 
          />
        </div>
      </section>
    </div>
  )
}

export default Formatting
