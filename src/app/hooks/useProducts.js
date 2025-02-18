import { useEffect, useState } from "react"

export const useProducts = () => {
    const [products, setProducts] = useState([])
    const [error,setError] = useState('')


    const fetchProducts = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])



    return { products,error}
} 