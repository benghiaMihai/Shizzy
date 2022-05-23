import React, { useState } from "react"
import { useCreateProduct } from "../../../hooks/useCreateProduct"

export const CreateProduct = () => {
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [price, setPrice] = useState("")
  const { isError, isLoading, createProduct } = useCreateProduct()
  

  const handleCreateProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createProduct({
      id:Date.now(),
      name,
      brand,
      price: Number(price),
    })
    setName("")
    setBrand("")
    setPrice("")
  }
  return (
    <div >
      
      <form className='flex flex-row' onSubmit={handleCreateProduct}>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Name'
          className='input w-full max-w-xs '
        />
        <input
          type='text'
          value={brand}
          onChange={e => setBrand(e.target.value)}
          placeholder='Brand'
          className='input w-full max-w-xs '
        />
        <input
          type='text'
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder='Price'
          className='input w-full max-w-xs'
        />
        <button className="bg-[F2AF29]" type='submit'>Create</button>
      </form>
    </div>
  )
}
