import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (prodId) => {
    dispatch(remove(prodId))
  }

  return (
    <><h3>Cart</h3><div className='cartWrapper'>
      {
        cart.map((product)=>{
          return(
            <div className="card" key={product.id}>
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleRemove(product.id)}>
                Remove
              </button>
            </div>
          );
        })
      }
    </div></>
  )
}

export default Cart