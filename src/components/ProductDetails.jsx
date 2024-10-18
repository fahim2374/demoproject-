// ProductDetails.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../pages/css/productsdetails.css";
import img1 from "../pages/images/1.jpg";
import img2 from "../pages/images/2.jpg";
import img3 from "../pages/images/3.jpg";
import Navbar from './Navbar';

// Sample product data - replace this with fetched data or a database call
const products = [
  {
    id: 1,
    title: 'Banner',
    price: 1000,
    description: 'High performance laptop for all your needs.',
    imgSrc: img1,
  },
  {
    id: 2,
    title: 'Banner',
    price: 500,
    description: 'Latest mobile with amazing features.',
    imgSrc: img2,
  },
  {
    id: 3,
    title: 'Banner',
    price: 1500,
    description: 'Desktop computer with powerful performance.',
    imgSrc: img3,
  },
];

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your API endpoint
    const apiUrl = 'https://your-api-endpoint.com/submit'; 

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form after submission
      } else {
        console.error('Error submitting the form:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <>
    Navbar
    
    <div className="product-details">
      <div className="product-container">
        <div className="product-image">
          <img src={product.imgSrc} alt={product.title} />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <div className="buttons">
            <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
            <Link to="/checkout" className="btn btn-success">Buy Now</Link>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="form-section">
        <h2>Contact Us</h2>
        {submitted && <div className="success-message">Thank you for your submission!</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
