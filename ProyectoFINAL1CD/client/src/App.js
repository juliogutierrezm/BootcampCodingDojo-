/* import OldProductList from './components/OldProductList' */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductForm from './components/ProductForm';
import EditProduct from './components/EditProduct';
import Cart from './components/Cart';
import HomeCarousel from './views/Home.view';
import Checkout from './components/Checkout';
import 'bootswatch/dist/darkly/bootstrap.min.css'; // quartz darkly solar

function App() {
  
  return (
    <Router>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/form" element={<ProductForm />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<HomeCarousel/>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
 
    </Router>
  );
}

export default App;
