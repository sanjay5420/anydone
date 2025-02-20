'use client'
import { useLogin } from '@/app/hooks/useLogin'
import { Button } from '@heroui/react'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Login = () => {
  const {setEmail,setPassword,handleSubmit} = useLogin()
 
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='p-9 rounded-xl shadow-lg flex justify-center items-center flex-col gap-3 w-full md:w-[30%] h-screen md:h-[60%]'>
        <h1 className='font-bold text-2xl p-5 text-indigo-600'>LO|GO</h1>

        <input className='border border-gray-500 p-2 rounded-lg w-full ' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

        <input className='border border-gray-500 p-2 rounded-xl w-full' placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />

        <Button onPress={() => handleSubmit()} className='w-full bg-indigo-500 text-white'>Login</Button>

        <p>Dont have an account ? <Link className='font-semibold text-indigo-500' href={'/Signup'}>Register here.</Link></p>

      </div>
    </div>
  )
}

export default Login
