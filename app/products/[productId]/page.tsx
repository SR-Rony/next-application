import React from 'react'

const ProductId = async({params}) => {
    const productId = (await params).productId
  return (
    <div>
        <h1>I am product id {productId}</h1>
    </div>
  )
}

export default ProductId