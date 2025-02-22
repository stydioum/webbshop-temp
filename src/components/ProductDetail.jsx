import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p><strong>Category:</strong> {product.category}</p> 
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> {product.price} kr</p>
      <p><strong>Product ID:</strong> {product.id}</p> 
    </div>
  );
};

export default ProductDetail;
