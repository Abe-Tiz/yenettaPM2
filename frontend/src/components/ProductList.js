import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/productList.css";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');

  //navigate hooks
  const navigate = useNavigate();

  //display all products when page is loading
  useEffect(() => {
    try {
        axios.get("http://localhost:4000/")
      .then((res) => {
        setProducts(res.data);
        setTitle("List Of All Products in stock are the following");
      })
    } catch (error) {
      console.error(error);
    }
  }, []);


  //get all products
  const handleAllProducts = () => {
    try {
        axios.get("http://localhost:4000/")
      .then((res) => {
        setProducts(res.data);
        setTitle("List Of All Products in stock are the following");
      })
    } catch (error) {
      console.error(error);
    }   
  };

  //handle availbale products
  const handlAvailableProduct = () => {
    try {
      axios.get("http://localhost:4000/availableProducts").then((res) => {
        console.log(res);
        setProducts(res.data);
        setTitle("List Of Available Products in stock are the following");
      });
    } catch (error) {
      console.error(error);
    }
    
  };

  //handle un availabile products
  const getUnAvailableProducts = () => {
    try {
        axios.get("http://localhost:4000/unavailableProducts").then((res) => {
          console.log(res);
          setProducts(res.data);
          setTitle("List Of Un Available Products in stock are the following");
        });
    } catch (error) {
      console.error(error);
    }
  
  };

  //handle checked or not
  const handleAvailabilityChange =  (productId, available) => {
  const updatedProducts = products.map((product) => {
    if (product.ID === productId) {
      const updatedProduct = { ...product, available: !available };
      try {
          axios.put(
          `http://localhost:4000/updateProductAvailability/${productId}`,
          updatedProduct
        );
        navigate("/");
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
      return updatedProduct;
    }
    return product;
  });
  setProducts(updatedProducts);
};

  //handle delete product
  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete("http://localhost:4000/delete/" + productId)
        .thene((res) => {
          console.log(res);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar
        handlAvailableProduct={handlAvailableProduct}
        getUnAvailableProducts={getUnAvailableProducts}
        handleAllProducts={handleAllProducts}
      />
      <div className="container w-75  rounded p-3 ">
        <h2> {title}</h2>
        <table className=" table table-hover  ">
          <thead class="thead-dark">
            <tr class="table-primary">
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Product
                product={product}
                handleAvailabilityChange={handleAvailabilityChange}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
