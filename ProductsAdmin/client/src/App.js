//app.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductForm from './components/ProductForm';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/form" element={<ProductForm />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
   </Router>
  );
}

export default App;
