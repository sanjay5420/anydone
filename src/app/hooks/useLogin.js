import { userLogin } from "@/redux/reducerSlices/userSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation"

export const useLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {userAuthData} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const router = useRouter()
    const filteredData = userAuthData?.find((item) => item.email === email && item.password === password)

    const handleSubmit = () => {
      if (filteredData) {
        dispatch(userLogin(filteredData))
        router.push('/')
        toast.success(`Logged in Successfully.`)
      } else {
        toast.error("Incorrect ID/Password.Please Try Again.")
      }
    }

    return {setEmail,setPassword,handleSubmit}
}