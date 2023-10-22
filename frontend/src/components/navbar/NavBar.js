import React from "react";
import { Link } from "react-router-dom";
import '../../style/navbar.css'

const NavBar = ({
  getUnAvailableProducts,
  handleAllProducts,
  handlAvailableProduct,
}) => {

  //handle unavailable products
  const handleUnAvailableProducts = () => {
    getUnAvailableProducts();
  };

  //get available products
  const handlAvailableProducts = () => {
    handlAvailableProduct();
  };

  return (
    <div className="nav ">
      <div>
        <button to="/">Abebe</button>
      </div>
      <div>
        <button
          onClick={handleAllProducts}
        >
          Home
        </button>
        <button>
          <Link 
            className="link"
            to="/addProduct"
          >
            Add Products
          </Link>
        </button>
        <button
          onClick={handlAvailableProducts}
        >
          Available Products
        </button>
        <button
          onClick={handleUnAvailableProducts}
        >
          Out Of Stock Products
        </button>
      </div>
    </div>
  );
};

export default NavBar;
