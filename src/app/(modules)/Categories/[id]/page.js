'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Category = ({ params }) => {
    const [category, setCategory] = useState()
    const router = useRouter()
    const getCategory = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/category/${params.id}`)
        const data = await res.json()
        setCategory(data)
    }

    useEffect(() => {
        getCategory()
    }, [])
    return (
        <div className='w-[80%] m-auto mt-5 '>
            <h1 className='text-2xl font-bold underline underline-offset-4'>{params.id.toUpperCase()}</h1>
            <div className='flex gap-4 flex-wrap rounded-xl mt-9 justify-center'>
                {category?.map((item) => {
                    return <div className='p-5 justify-between flex flex-col gap-3 w-72 h-80 shadow-2xl rounded-2xl cursor-pointer' onClick={()=>router.push(`/Products/${item.id}`)} >
                        <div className='bg-gray-50 h-40 w-full rounded-2xl p-3'><img src={item.image} className='w-full h-full object-contain' /></div>
                        <div className='flex flex-col gap-2'>
                            <p className='line-clamp-2'>{item.title}</p>
                            <p>{item.name}</p>
                            <p className='font-bold text-blue-600 text-xl' >${item.price}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Category
