import React,{useContext} from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from '../../context/shopContext'
import CartContent from '../cart/CartContent'
import './cart.css'

const Cart=() => {
  const {  cartItems,getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  return (
    <div className="cart">
      <div>
        <h1>your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((Items)=> {
          if (cartItems [Items.id] !== 0 )
          return <CartContent data ={Items}/>
        })}
      </div>
      <div className="checkout">
<p>subtotal : ${totalAmount}</p>
<button>continue shopping </button>
<button>checkout</button>
      </div>
    </div>
  );
}

export default Cart;
