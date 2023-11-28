import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://655e14659f1e1093c59a7c39.mockapi.io/shelf/tech-marketplace/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  const handleAddToCart = () => {
    // Logic to add product to cart
    // ...
  };

  return (
    <div className="product-detail">
      {product && (
        <>
          <img src={product['image-url']} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
