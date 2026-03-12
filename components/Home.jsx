import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">ShopApp</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Discover amazing products at unbeatable prices. Browse our curated collection and find exactly what you need.
        </p>
        <button
          onClick={() => navigate('/product-list')}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
        >
          Shop Now
        </button>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          { icon: '🚀', title: 'Fast Delivery', desc: 'Get your orders delivered quickly and reliably.' },
          { icon: '💰', title: 'Best Prices', desc: 'Competitive pricing on all our products.' },
          { icon: '⭐', title: 'Top Quality', desc: 'Only the best products make it to our store.' },
        ].map((f) => (
          <div key={f.title} className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <span className="text-4xl mb-3 block">{f.icon}</span>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home
