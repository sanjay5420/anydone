import { addToCart } from "@/redux/reducerSlices/cartSlice"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"

export const useSingleProduct = (params) => {
    const dispatch = useDispatch()
    const [singleProduct, setSingleProduct] = useState()
    const {isLoggedIn} = useSelector(state => state.user)

    const fetchProduct = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const data = await res.json()
        setSingleProduct(data)
    }
    useEffect(() => {
        fetchProduct()
    }, [])
    const handleCart = () => {
        if (isLoggedIn)
            dispatch(addToCart(singleProduct))
        else {
            toast.error('Please Login to use Cart.')
        }
    }


    return {singleProduct,handleCart}
}