import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProductList() {

  const [productlist, setProductlist] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]) 
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const goToProduct = (prodObj) => {
    navigate('/product', { state: { prodObj } })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
      
        setProductlist(data)
        setFilteredProducts(data) 
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const searchProduct = (e) => {
    e.preventDefault()
    const value = e.target[0].value.toLowerCase()
    const products = productlist.filter(product =>
      product.category.toLowerCase().includes(value)
    )
    setFilteredProducts(products)
    e.target.reset()
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    )
  }

  if (error) {
    return <h1 className="text-red-500 text-center mt-10">{error}</h1>
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        Our Products
      </h1>

      <form onSubmit={searchProduct} className="flex justify-center mb-8 px-4">
        <div className="flex w-full max-w-lg shadow-sm">
          <input
            type="text"
            placeholder="Search by category..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-r-lg hover:bg-blue-700 transition font-medium">
            Search
          </button>
        </div>
      </form>

      {filteredProducts.length === 0 ? (
        <h1 className='text-center text-gray-500'>No products found</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => goToProduct(product)}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col cursor-pointer group"
            >
              <div className="flex items-center justify-center h-44 sm:h-52 mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h2 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h2>

              <p className="text-green-600 font-bold mt-auto pt-3 text-lg">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default ProductList