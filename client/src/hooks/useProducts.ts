import { useEffect, useState } from "react";
import { getProduct } from "../service/productService";
import { IProduct} from "../types/product"



export const useProducts = () => {
    const[products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(()=> {
        ;(async () => {
            setIsLoading(true)
            setIsError(false)
            try {
                const data = await getProduct()
                setProducts(data)
            } catch (err) {
                console.error(err);
                setIsError(true)   
            }
            setIsLoading(false)
        })()
    },[])

    return {
        products,isLoading,isError
    }
}

