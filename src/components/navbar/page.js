'use client'
import { logoutUser } from '@/redux/reducerSlices/userSlice'
import { CgProfile } from "react-icons/cg";
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiShoppingCart } from "react-icons/fi";
import { removeFromCart } from '@/redux/reducerSlices/cartSlice'
import DropDown from '../dropdown/page'


const Navbar = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {isLoggedIn} = useSelector(state => state.user)
    const {cartItems} = useSelector(state => state.cart)

    const handleLogout = () => {
        cartItems.forEach((item)=>{
            dispatch(removeFromCart(item))
        })
        dispatch(logoutUser(cartItems))
    }

    return (
        <div>
            <div className='p-5 w-[80%] m-auto justify-between items-center rounded-lg flex shadow-xl'>
                <div>LO|GO</div>
                <div className='flex gap-3 items-center'>
                    {isLoggedIn ? <DropDown handleLogout = {handleLogout}/> : <div className='cursor-pointer flex gap-2' onClick={()=> router.push('/Login')}> <CgProfile className='text-2xl'/> <span>LOGIN</span></div>}
                    <div className='flex justify-center items-center'>
                        <FiShoppingCart className='text-2xl' onClick={() => router.push('/Cart')} />
                           <div className='bg-indigo-500 text-white rounded-xl text-sm p-1 h-5 w-5 flex justify-center items-center mb-5'>{cartItems?.length}</div> 
                    </div>

                </div>

            </div>

            <div>

            </div>

        </div>
    )
}

export default Navbar
