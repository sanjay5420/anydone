'use client'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '@/redux/reducerSlices/cartSlice'
import { Button, Image } from '@heroui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Cart = () => {
  const { cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const subTotal = cartItems?.reduce((total, item) => {
    return total + (item.price * item.Quantity)
  }, 0)

  return (
    <div className='md:w-[80%] m-auto flex flex-col md:flex-row mt-5'>
      <div className='md:w-[80%] w-full shadow-lg p-9'>
        <div className='bg-gray-200 flex justify-center md:justify-between items-center p-3'>
          <div className='w-[50%] md:w-[65%]'>Product</div>
          <div className='w-[16.67%] md:w-[20%] md:text-center'>Quantity</div>
          <div className='w-[16.67%] md:w-[20%] md:text-center'>Price</div>
          <div className='w-[10%]'></div>
        </div>
        {cartItems.length > 0 ? cartItems?.map((item) => {
          return <div className='shadow-lg bg-white mt-5 flex justify-center items-center p-3'>
            <Image src={item.image} width={100} height={100} />
            <div className='md:w-[60%] md:text-center'>{item.title}</div>
            <div className='md:w-[20%] md:text-center'>
              <button className='p-2 shadow-lg rounded-lg' onClick={() => dispatch(decreaseQuantity(item))}>
                -
              </button>
              <span className='p-2'>
                {item.Quantity}
              </span>
              <button className='p-2 shadow-lg rounded-lg' onClick={() => dispatch(increaseQuantity(item))}>
                +
              </button ></div>
            <div className='md:w-[20%] md:text-center'>{(item.price * item.Quantity).toFixed(2)*1}</div>
            <div><Button onPress={()=>{dispatch(removeFromCart(item))}}>Remove</Button></div>
          </div>
        }) : <div className='p-9 text-2xl mt-5 text-center'>Cart Is Empty</div>}
      </div>
      <div className='md:w-[20%] shadow-lg w-full flex justify-between items-center p-3'>
        <div className='flex flex-col'>
          <span>Subtotal: </span>
          <span >Discount: </span>
          <span>Total: </span>
        </div>
        <div className='flex flex-col'>
          <span>${subTotal.toFixed(2)}</span>
          <span>${subTotal > 100 ? 20.00 :0.00}</span>
          <span className='text-lg font-bold'>${subTotal && subTotal > 100 ? subTotal.toFixed(2)*1-20 : subTotal.toFixed(2)*1}</span>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Cart
