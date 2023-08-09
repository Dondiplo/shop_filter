import React from 'react'
import './shop.css'
import { PRODUCTS } from '../../Products'
import Items from './Items'
function Shop() {
  return (
    <div className='shop'>
        <div className='products'>
            {PRODUCTS.map((product) =><Items data={product}/> )}
        </div>
    </div>
  )
}

export default Shop