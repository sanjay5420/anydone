import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        setCartItem: (state,action) => {

        },
        addToCart: (state, action) => {
            let tempProduct = state.cartItems.find((item) => item.id === action.payload.id)
            if (tempProduct) {
                return
            } else {
                state.cartItems.push({...action.payload, Quantity: 1 })
                toast.success('Product Added to Cart.')
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            }

        },
        increaseQuantity: (state, action) => {
            let selectedProduct = state.cartItems.find((item) => item.id === action.payload.id)
            selectedProduct.Quantity === 10 ? selectedProduct.Quantity : selectedProduct.Quantity += 1
        },
        decreaseQuantity : (state,action) => {
            let selectedProduct =state.cartItems.find((item)=> item.id === action.payload.id)
            selectedProduct.Quantity === 1 ? selectedProduct.Quantity : selectedProduct.Quantity -= 1
        },
        removeFromCart: (state,action) => {
            state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload.id)
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))

            
        }

    },
})


export const {addToCart,increaseQuantity,decreaseQuantity,removeFromCart,setCartItem} = cartSlice.actions

export default cartSlice.reducer