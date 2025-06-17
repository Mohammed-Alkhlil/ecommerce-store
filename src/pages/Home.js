import React, { useState } from 'react';
import productsData from '../data/products';
import ProductCard from '../components/ProductCard';   // ← أضف هذا
import './Home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  const filtered = productsData.filter(p =>
    (category === 'All' || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const featured = filtered.slice(0, 6);

  return (
    <div className="page home">
      <div className="hero">
        <h2>Welcome to MyShop 🛍️</h2>
        <p>Your one-stop online store for electronics, fashion and more. Enjoy seamless shopping with our modern UI and quick checkout!</p>
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="Search featured products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <section className="featured">
        <h3>Featured Products</h3>
        <div className="product-list">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
