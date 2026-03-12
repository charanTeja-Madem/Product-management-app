import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-500 py-6 text-center text-white">
      <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} ShopApp. All rights reserved.</p>
    </footer>
  )
}

export default Footer
