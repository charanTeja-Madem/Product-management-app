import React, { useState } from 'react'

function Contactus() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="py-12 max-w-2xl mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-2">Contact Us</h1>
      <p className="text-gray-500 text-center mb-8">We'd love to hear from you. Send us a message!</p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <span className="text-4xl mb-3 block">✅</span>
          <h2 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h2>
          <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              required
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}

export default Contactus
