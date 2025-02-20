'use client'
import { useFilterCategory } from '@/app/hooks/useFilterCategory'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProductList = ({filteredProducts}) => {
    const router = useRouter()

    return (
        <div>
            <h1 className='text-center text-2xl font-bold  mt-7 underline underline-offset-8'>All Products</h1>
            <div className='justify-center flex'>
                <div className='flex gap-4 flex-wrap rounded-xl mt-9 justify-center'>
                    {filteredProducts?.map((item) => {
                        return <div className='p-7 justify-between flex flex-col gap-2 w-72 h-96 shadow-2xl rounded-2xl mt-5 cursor-pointer ' onClick={() => router.push(`/Products/${item.id}`)}>
                            <div className='bg-gray-50 h-52 w-full rounded-2xl p-3'><img src={item.image} className='w-full h-full object-contain' /></div>
                            <div className='flex flex-col gap-2'>
                                <p className='line-clamp-2'>{item.title}</p>
                                <p>{item.name}</p>
                                <p className='font-bold text-blue-600 text-xl' >${item.price}</p>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}

export default ProductList
