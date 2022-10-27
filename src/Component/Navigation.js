import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../page/CartContext";

const Navigation = () => {
  const cartStyle = {
    background: "#F59E0D",
    display: "flex",
    borderRadius: "5rem",
    padding: ".3rem 1.2rem",
  };

  const { cart } = useContext(CartContext);
  
  return (
    <>
      <nav className="container mx-auto flex item-center justify-between py-5">
        <Link to={"/"}>
          <img style={{ height: 45 }} src="/images/logo.png" alt="logo" />
        </Link>
        <ul className="flex item-center">
          <li className="font-bold">
            <Link to={"/Home"}>Home</Link>
          </li>
          <li className="ml-6 font-bold">
            <Link to={"/Menu"}>Menu</Link>
          </li>
          <li className="ml-6">
            <Link to={"/cart"}>
              <div style={cartStyle}>
                <span>{ cart.totalItems ? cart.totalItems : 0 }</span>
                <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
