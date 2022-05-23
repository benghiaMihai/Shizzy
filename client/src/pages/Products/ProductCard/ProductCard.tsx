import React from "react"
import { IProduct } from "../../../types/product"
import { Link } from "react-router-dom"
interface ProductCardProps {
  product: IProduct
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <Link to={`/shoes/${product.id}`}><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" /></Link>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.brand}</p>
    <div className="card-actions">
      <button className="btn btn-primary">{product.price} Ron</button>
    </div>
  </div>
</div>
  )
}
