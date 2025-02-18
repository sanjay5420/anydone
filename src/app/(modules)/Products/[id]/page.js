'use client'
import { useSingleProduct } from '@/app/hooks/useSingleProduct'
import { Button } from '@heroui/react'
import React from 'react'

const Product = ({ params }) => {
    const { singleProduct,handleCart } = useSingleProduct(params)
    return (
        <div>
            <div className='mt-9 flex gap-3 m-auto w-[80%]'>
                <div className='w-[50%] p-10 flex justify-center items-center'>
                    <img src={singleProduct?.image} width={300} />
                </div>
                <div className='w-[50%] p-10 flex justify-center flex-col gap-5'>
                    <h1 className='text-2xl font-bold'>{singleProduct?.title}</h1>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-extralight italic text-xl underline underline-offset-4'>Product description: </h1>
                        <div className='italic'>{singleProduct?.description}</div>
                    </div>
                    <div className='text-2xl text-blue-600 font-bold'>$ {singleProduct?.price}</div>
                    <Button className='w-24' onPress={() => { handleCart() }}>Add To Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default Product
