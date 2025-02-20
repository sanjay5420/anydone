import { useState } from "react"
import { useProducts } from "./useProducts"

export const useFilterCategory = () => {
    const { products } = useProducts()
    const [selectedCategory,setSelectedCategory] = useState('All')
    const [range,setRange] = useState(1500)

    const allCategories = ['All',...products.reduce((acc, item) => {
        if (!acc.includes(item.category)) {
            acc.push(item.category)
        }
        return acc
    }, [])]

    const categoryFilter = selectedCategory === 'All' ? products : products.filter((item)=> item.category === selectedCategory)

    const filteredProducts = categoryFilter?.filter((item) => item.price < range)



    

   

    

    return {allCategories,setSelectedCategory,selectedCategory,filteredProducts,products,range,setRange,categoryFilter }
}