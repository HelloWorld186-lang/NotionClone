import React from 'react'
import CodeExample from '../component/CodeExample'
import CodeShowing from '../component/CodeShowing'

const CodeHighlighting = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4  space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Code and Syntax Highlighting in Markdown
      </h2>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Inline Code</h3>
        <p className="text-gray-700 text-lg mb-4">Use backticks: <code className="bg-gray-100 px-2 py-1 rounded">`inline code`</code></p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample
            language="markdown"
            codeString={`Here is some \`inline code\`.`}
          />
          <CodeShowing
            heading="Preview"
            content={`Here is some \`inline code\`.`}
          />
        </div>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Code Blocks</h3>
        <p className="text-gray-700 text-lg mb-4">Use triple backticks for code blocks.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample
            language="markdown"
            codeString={`\`\`\`\nprint("Hello, World!")\n\`\`\``}
          />
          <CodeShowing
            heading="Preview"
            content={`\`\`\`\nprint("Hello, World!")\n\`\`\``}
          />
        </div>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Syntax Highlighting</h3>
        <p className="text-gray-700 text-lg mb-4">Specify the language after the opening backticks.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample
            language="markdown"
            codeString={`\`\`\`python\ndef hello_world():\n    print("Hello, World!")\n\`\`\``}
          />
          <CodeShowing
            heading="Preview"
            content={`\`\`\`python\ndef hello_world():\n    print("Hello, World!")\n\`\`\``}
          />
        </div>
      </section>
    </div>
  )
}

export default CodeHighlighting