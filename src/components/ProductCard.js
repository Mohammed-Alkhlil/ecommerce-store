// src/components/ProductCard.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
//import './ProductCard.css'; // تأكد أن هذا الملف موجود

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    const ok = window.confirm(`Add "${product.name}" to your cart?`);
    if (ok) {
      addToCart(product);
      window.alert(`✔️ "${product.name}" added to cart!`);
    }
  };

  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="card-link">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>
      <p className="price">${product.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
