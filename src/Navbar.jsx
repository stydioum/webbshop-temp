import { Link } from "react-router-dom";
import Logo from "./components/Logo";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product-list">Product</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/order-confirmation">Order</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
