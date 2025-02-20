'use client'
import { logoutUser } from '@/redux/reducerSlices/userSlice'
import { CgProfile } from "react-icons/cg";
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiShoppingCart } from "react-icons/fi";
import { removeFromCart } from '@/redux/reducerSlices/cartSlice'
import DropDown from '../dropdown/page'
import { useFilterCategory } from '@/app/hooks/useFilterCategory';
import { Image } from '@heroui/react';


const Navbar = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { isLoggedIn } = useSelector(state => state.user)
    const { cartItems } = useSelector(state => state.cart)
    const { filteredProducts } = useFilterCategory()
    const [input, setInput] = useState('')

const handleClick = (item) =>{
    router.push(`/Products/${item.id}`)
    setInput('')
}
    const handleLogout = () => {
        cartItems.forEach((item) => {
            dispatch(removeFromCart(item))
        })
        dispatch(logoutUser())
    }
    const searchFilter = filteredProducts.filter((item) => item.title.toUpperCase().includes(input.toUpperCase()))
    return (
        <div>
            <div className='p-5 w-[80%] m-auto justify-between items-center rounded-lg flex shadow-xl'>
                <div onClick={()=>router.push('/')}><h1 className='text-2xl font-semibold text-indigo-500 cursor-pointer'>LO|GO</h1></div>
                <div className='w-[40%]'>
                    <input
                        className='border border-gray-400 rounded-xl p-2 w-full'
                        placeholder='Search Products'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                   { input !== '' && <div className='absolute rounded-xl w-[32%] shadow-xl p-3 mt-3 bg-white'>
                        {searchFilter?.map((item) => {
                            return <div onClick={()=>{handleClick(item)}}  className='h-28 md:w-full border border-indigo-500 mt-3 p-3 rounded-xl flex gap-2 items-center justify-center cursor-pointer'>
                                <div className='w-[25%] text-center'><Image src={item.image} width={70} height={70} /></div>
                                <div className='truncate w-[60%]'>{item.title}</div>
                                <div className=' text-indigo-800 w-[35%] text-center'>${item.price}</div>
                            </div>
                        })}
                    </div>}
                </div>

                <div className='flex gap-3 items-center'>

                    {isLoggedIn ? <DropDown handleLogout={handleLogout} /> : <div className='cursor-pointer flex gap-2' onClick={() => router.push('/Login')}> <CgProfile className='text-2xl' /> <span>LOGIN</span></div>}


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
