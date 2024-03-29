/* import OldProductList from './components/OldProductList' */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductForm from "./components/ProductForm";
import EditProduct from "./components/EditProduct";
import Cart from "./components/Cart";
import HomeCarousel from "./views/Home.view";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/NavBar";
import "bootswatch/dist/slate/bootstrap.min.css"; // quartz darkly solar cyborg sketchy slate superhero
import ProductsAdmin from "./components/ProductsAdmin";

function App() {
  return (
    <BrowserRouter>

        <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<HomeCarousel />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/form" element={<ProductForm />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/admin" element={<ProductsAdmin/>} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
