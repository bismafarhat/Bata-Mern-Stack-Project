import React from 'react';
import { Link } from 'react-router-dom';
import './Choice.css'; // Updated filename
import Header from '../Components/Headar'; // Updated spelling
import Footer from '../Components/Footer';

function Women() {
  return (
    <div >  
      <Header />
      <h2 className="kids-heading">Kids Footwear Categories</h2>
      <div className="link-container">
        <Link to="/WFormal" className="category-link">Formal</Link>
        <Link to="/Wloungewear" className="category-link">Loungewear</Link>
        <Link to="/WSandals" className="category-link">Sandals</Link>
        <Link to="/WSneakers" className="category-link">Sneakers</Link>  
      </div>
      <Footer />
    </div>
  );
}

export default Women;
