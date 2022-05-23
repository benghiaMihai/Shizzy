import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import './Home.css'


export const Home = () => {
    return (
        <Layout>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Salut!</h1>
      <p className="py-6">Hai la cumpărăturit!</p>
      <Link to={'/shoes'}><button className="btn btn-primary bg-[#2A324B]">Fresh Shoes!</button></Link>
    </div>
  </div>
</div>
        </Layout>
    )
}