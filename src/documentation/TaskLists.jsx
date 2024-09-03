import React from 'react'
import CodeExample from '../component/CodeExample'
import CodeShowing from '../component/CodeShowing'

const TaskLists = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Task Lists in Markdown
      </h2>
      <section className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Creating Task Lists</h3>
        <p className="text-gray-700 text-lg mb-4">Use <code className="bg-gray-100 px-2 py-1 rounded">- [ ]</code> for an unchecked item and <code className="bg-gray-100 px-2 py-1 rounded">- [x]</code> for a checked item.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CodeExample
            language="markdown"
            codeString={`- [x] Completed task\n- [ ] Incomplete task`}
          />
          <CodeShowing
            heading="Preview"
            content={`- [x] Completed task\n- [ ] Incomplete task`}
          />
        </div>
      </section>
    </div>
  )
}

export default TaskLists