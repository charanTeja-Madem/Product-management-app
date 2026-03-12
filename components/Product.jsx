import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Product() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const product = state?.prodObj

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/product-list')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Products
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition"
      >
        &larr; Back
      </button>

      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <div className="md:w-2/5 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-64 h-64 sm:w-80 sm:h-80 object-contain"
          />
        </div>

        <div className="md:w-3/5 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
            {product.category}
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-3xl font-bold text-green-600">${product.price}</p>
          <div className="flex items-center gap-2 text-yellow-500">
            <span className="text-lg">&#9733;</span>
            <span className="text-gray-700 font-medium">{product.rating?.rate}/5</span>
            <span className="text-gray-400 text-sm">({product.rating?.count} reviews)</span>
          </div>
          <p className="text-gray-600 leading-relaxed mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
