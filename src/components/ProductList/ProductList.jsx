import React from 'react'

import './ProductList.css'
import ProductItem from 'components/ProductItem/ProductItem'
import { StateCart } from 'context/CartState'

function ProductList() {

  const {product } = StateCart()
  return (
    <div className="product-list">
       {
         product.map((item)=> (
           <ProductItem item={item} key={item.id} />
         ))
       }
    </div>
  )
}

export default ProductList