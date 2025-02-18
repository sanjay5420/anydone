'use client'
import React, { useEffect } from 'react'
import ProductList from './(modules)/Products/page'
import SideBar from '@/components/sidebar/page'
import Navbar from '@/components/navbar/page'
import { useFilterCategory } from './hooks/useFilterCategory'

const Home = () => {

  const data = [
    { name: 'Sanjay', email: 'sanjay@mail.com', password: '1234' },
    { name: 'Bijay', email: 'bijay@mail.com', password: '5678' },
    { name: 'Ajay', email: 'ajay@mail.com', password: '9012' }
  ]
  const { setSelectedCategory, selectedCategory, filteredProducts } = useFilterCategory()

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(data))
  }, [])

  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='flex flex-col md:flex-row w-[80%] m-auto'>
        <div className='w-full md:w-[23%] bg-gray-100 p-5 md:h-screen max-h-fit md:sticky top-0'>
          <SideBar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
        </div>
        <div className='w-full md:w-[80%] p-5'>
          <ProductList filteredProducts={filteredProducts} />
        </div>

      </div>
    </div>
  )
}

export default Home
