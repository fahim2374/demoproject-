import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = ({ products }) => {
  const query = new URLSearchParams(useLocation().search).get('query');

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Search Results for: "{query}"</h1>
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.imgSrc} alt={product.title} />
          </div>
        ))
      ) : (
        <p>This product is not available.</p>
      )}
    </div>
  );
};

export default SearchResults;
