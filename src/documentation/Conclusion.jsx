import React from 'react'

const Conclusion = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
        Conclusion
      </h2>
      <div className="space-y-6">
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Final Thoughts</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Markdown is a versatile and powerful tool for writing formatted text.</li>
            <li>Its simplicity and wide support make it ideal for many applications.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Conclusion