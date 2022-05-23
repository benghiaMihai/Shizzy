import axios from "axios";
import { ICreateProductReq } from "../types/createProductReq";
import { IProduct } from "../types/product";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
})

export const getProduct = async () => {
    const {data} = await axiosInstance.get<IProduct[]>("/shoes")
    console.log(data)
    return data
}
export const postProduct = async (productReq: ICreateProductReq) => {
    const { data } = await axiosInstance.post<IProduct>(`/shoes`, productReq)
    return data
  }
  export const getProductById = async (id: number) => {
    const { data } = await axiosInstance.get<IProduct>(`/shoes/${id}`)
    return data
  }
  export const deleteById = async (id: number) => {
    const { data } = await axiosInstance.delete<IProduct>(`/shoes/${id}`)
    return data
  }
  export const updateById = async (id: number) => {
    const { data } = await axiosInstance.put<IProduct>(`/shoes/${id}`)
    return data
  }