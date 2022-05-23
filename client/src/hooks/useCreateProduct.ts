import { useState } from "react"
import { ICreateProductReq } from "../types/createProductReq"
import { postProduct } from "../service/productService"
export const useCreateProduct = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const createProduct = async (productReq: ICreateProductReq) => {
    try {
      setIsError(false)
      setIsLoading(true)
      await postProduct(productReq)
    } catch (err) {
      console.error(err)
      setIsError(true)
    }
    setIsLoading(false)
  }

  return {
    isLoading,
    isError,
    createProduct,
  }
}
