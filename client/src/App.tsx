import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {About} from "./pages/About/About"
import {Home} from "./pages/Home/Home"
import {Product} from "./pages/Product/Product"
import {Products} from "./pages/Products/Products"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path={"about"} element={<About/>}/>
        <Route path={"shoes"} element={<Products/>}/>
        <Route path={"shoes/:id"} element={<>
        <Product />
        </>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
