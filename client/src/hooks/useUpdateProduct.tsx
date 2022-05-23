import { useEffect, useState } from "react"
import { getProductById } from "../service/productService"
import { IProduct } from "../types/product"

export const useProductsById = (id: number) => {
  const [product, setProduct] = useState<IProduct>()

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const data = await getProductById(id)
        setProduct(data)
      } catch (err) {
        console.error(err)
        setIsError(true)
      }
      setIsLoading(false)
    })()
  }, [id])

  return {
    product,
    isLoading,
    isError,
  }
}
