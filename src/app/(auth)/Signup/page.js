'use client'
import React, {useEffect} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { updatedUser } from '@/redux/reducerSlices/userSlice';

const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone: Yup.string()
        .min(10, 'Ph. should be 10 digits.')
        .max(10, 'Ph. should be 10 digits.')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'invalid!')
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords match')
        .min(3, 'Password do not match.'),
});

const SignUp = () => {
    
const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', JSON.stringify([]))
        }
    }, [])


    const handleSubmit = (values) => {
        const existingUsers = JSON.parse(localStorage.getItem('user') || [])
        const duplicateUser = existingUsers.find((item) => item.email === values.email)
        if (duplicateUser) {
            toast.error('User Already Exists.')
            return
        } else {
            existingUsers.push(values)
            localStorage.setItem('user', JSON.stringify(existingUsers))
            toast.success('User Registration Successful.')
            dispatch(updatedUser(existingUsers))
            router.push('/Login')
        }
    }
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <Formik
                initialValues={{
                    fullName: '',
                    phone: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    handleSubmit(values)
                    resetForm()
                }}
            >
                {({ errors, touched }) => (
                    <Form className='p-9 w-[80%] md:w-[50%] shadow-lg flex flex-col gap-3 rounded-xl'>
                        <h1 className='text-2xl font-bold text-indigo-500 text-center mb-5 p-2'>SignUp</h1>
                        <Field className="w-full p-2 border rounded-md border-gray-300" name="fullName" placeholder="Enter Your Name" />
                        {errors.fullName && touched.fullName ? (
                            <div>{errors.fullName}</div>
                        ) : null}
                        <Field className="w-full p-2 border rounded-md border-gray-300" name="phone" placeholder="Enter Phone Number" />
                        {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                        ) : null}
                        <Field className="w-full p-2 border rounded-md border-gray-300" name="email" type="email" placeholder="Enter Your Email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}

                        <Field className="w-full p-2 border rounded-md border-gray-300" name="password" type="password" placeholder="Enter Your Password" />
                        {errors.password && touched.password ? <div>{errors.password}</div> : null}

                        <Field className="w-full p-2 border rounded-md border-gray-300" name="confirmPassword" type="password" placeholder="Confirm Password" />
                        {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
                        <button type="submit" className='bg-indigo-500 p-2 rounded-xl text-white mt-4'>Submit</button>
                        <p>Already have an Account ? <Link href={'/Login'} className='font-semibold text-indigo-500'>Login</Link></p>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default SignUp