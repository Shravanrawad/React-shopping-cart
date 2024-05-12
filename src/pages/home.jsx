import React from 'react'
import Products from '../componants/products'

function Home() {
  return (
    <div>
      <h2 className='heading'>Welcome to shop Zone</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  )
}

export default Home
