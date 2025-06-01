import React from 'react'
import { Metadata } from 'next'

type Props ={
  params:Promise<{productId:string}>;
}

export const generateMetadata = async({
  params,
}:Props):Promise<Metadata> =>{
  const id = (await params).productId

  return {
    title:`Product ${id}`
  }
}

const ProductId = async({params}:props) => {
    const productId = (await params).productId
  return (
    <div>
        <h1>I am product id {productId}</h1>
    </div>
  )
}

export default ProductId