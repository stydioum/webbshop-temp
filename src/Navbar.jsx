import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li> 
        <li><Link to="/product-list">Product List</Link></li>
        <li><Link to="/cart">Shopping Cart</Link></li> 
        <li><Link to="/order-confirmation">Order Confirmation</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
