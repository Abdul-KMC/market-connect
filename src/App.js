import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import AuctionPopup from './components/AuctionPopup';
import CartPopup from './components/CartPopup';
import Footer from './components/Footer';
import ProductListingForm from './components/ProductListingForm';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <ProductListingForm />
        <AuctionPopup />
        <CartPopup />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
