import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { ProductCard } from "./ProductCard/ProductCard"
import { useProducts } from "../../hooks/useProducts";
import { CreateProduct } from "./CreateProduct/CreateProduct";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const Products = () => {
    const { isLoading, isError, products } = useProducts()
    return (
      <>
      <Navbar/>
        <CreateProduct />
        <div>{isLoading && <p>Loading.....</p>}</div>
        <div>{isError && <p>Something went wrong....</p>}</div>
        <div className=" flex flex-row flex-wrap">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Footer/>
        </>
      
    )
  }