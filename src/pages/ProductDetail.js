import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products';
import { CartContext } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === +id);
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAdd = () => {
    const ok = window.confirm(`Add "${product.name}" to your cart?`);
    if (ok) {
      addToCart(product);
      window.alert(`✔️ "${product.name}" added to cart!`);
    }
  };

  return (
    <div className="page detail">
      <div className="detail-card">
        <img src={product.image} alt={product.name} />
        <div className="detail-info">
          <h2>{product.name}</h2>
          <p className="price">${product.price}</p>
          <p className="category">{product.category}</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          </p>
          <button onClick={handleAdd}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
