'use client'
import { useLogin } from '@/app/hooks/useLogin'
import { Button } from '@heroui/react'
import React from 'react'

const Login = () => {
  const {setEmail,setPassword,handleSubmit} = useLogin()
  
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='p-9 rounded-xl shadow-lg flex justify-center items-center flex-col gap-3 w-[30%]'>
        <h1 className='font-bold text-2xl p-5 text-indigo-600'>LO|GO</h1>
        <input className='border border-gray-500 p-2 rounded-lg w-full ' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input className='border border-gray-500 p-2 rounded-xl w-full' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <Button onPress={() => handleSubmit()} className='w-full bg-indigo-500'>Login</Button>
      </div>
    </div>
  )
}

export default Login
