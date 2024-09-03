import React from 'react'

const MarkdownEditors = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Markdown Editors and Tools
      </h2>
      <div className="space-y-6">
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Popular Markdown Editors</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-700">Desktop</h4>
              <ul className="space-y-2 text-gray-700">
                <li>VS Code</li>
                <li>Typora</li>
                <li>Obsidian</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-700">Online</h4>
              <ul className=" space-y-2 text-gray-700">
                <li>Dillinger</li>
                <li>StackEdit</li>
                <li>Markdown Live Preview</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Markdown Plugins</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-700">VS Code Plugins</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Markdown All in One</li>
                <li>Markdown Preview Enhanced</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-700">Browser Extensions</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Markdown Here</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MarkdownEditors