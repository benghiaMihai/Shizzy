
import { Layout } from "../../components/Layout/Layout"
import { useParams } from "react-router-dom"
import { useProductsById } from "../../hooks/useProductById"

export const Product = () => {
  const { id } = useParams<{ id: string }>()
  const { isError, isLoading, product } = useProductsById(Number(id))
  
  return (
    <Layout><div></div>
      <div>{isLoading && <p>Loading...</p>}</div>
      <div>{isError && <p>Something went wrong</p>}</div>
      <div className="card w-full bg-gray-400 hover:bg-sky-700 shadow-xl">
  <figure className="px-10 pt-10">
  
    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl z-9" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product?.name}</h2>
    <p></p>
    <div className="card-actions">
      <button className="btn btn-primary">{product?.price} Ron</button>
    </div>
  </div>
</div>

    </Layout>
  )
}