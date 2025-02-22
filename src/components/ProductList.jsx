import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.title}</h3>
            <p>{product.price} kr</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
       
            <Link to={`/product/${product.id}`} className="product-detail-link">
            View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

