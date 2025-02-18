import { useState } from "react"
import { useProducts } from "./useProducts"

export const useFilterCategory = () => {
    const { products } = useProducts()
    const [selectedCategory,setSelectedCategory] = useState('All')

    const allCategories = ['All',...products.reduce((acc, item) => {
        if (!acc.includes(item.category)) {
            acc.push(item.category)
        }
        return acc
    }, [])]

    const filteredProducts = selectedCategory === 'All' ? products : products.filter((item)=> item.category === selectedCategory)

    return {allCategories,setSelectedCategory,selectedCategory,filteredProducts,products }
}