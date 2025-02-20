'use client'
import { useFilterCategory } from '@/app/hooks/useFilterCategory'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SideBar = ({ setSelectedCategory, selectedCategory, range, setRange }) => {
    const { allCategories } = useFilterCategory()
    const router = useRouter()
    return (
        <div className='md:h-screen bg-gray-200 p-3 gap-5 flex flex-col rounded-lg'>
            <h1 className='text-md mt-9 font-bold underline underline-offset-8'>Shopping Category</h1>
            <div className='gap-3 flex flex-wrap flex-col'>
                {/* {categoryList?.map((item) => {
                    return <div className='text-sm font-semibold shadow-sm gap-3 p-4 rounded-xl cursor-pointer' onClick={() => router.push(`/Categories/${item}`)}>{item.toUpperCase()}</div>
                })} */}
                {allCategories.map((item) => {
                    return <div className='text-sm font-semibold shadow-sm gap-3 p-4 rounded-xl cursor-pointer flex'>
                        <div>
                            <input
                                type='radio'
                                value={item}
                                checked={item === selectedCategory}
                                onChange={() => { setSelectedCategory(item) }}
                            />
                        </div>
                        <div>{item.toUpperCase()}</div>

                    </div>
                })}

                <h1 className='text-md mt-9 font-bold underline underline-offset-8'>Filter By Price.</h1>
                <input
                    type='range'
                    min={10}
                    max={1500}
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    className='mt-4'
                />
                <span>Price: ${range} </span>
            </div>


        </div>
    )
}

export default SideBar
