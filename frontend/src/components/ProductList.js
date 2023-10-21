import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/productList.css";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
// import ProductForm from "./ProductForm";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  //navigate hooks
  const navigate = useNavigate();

  //display all products when page is loading
  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAllProducts = () => {
    axios
      .get("http://localhost:4000/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  };

  //handle availbale products
  const handlAvailableProduct = () => {
    axios.get("http://localhost:4000/availableProducts").then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  };

  //handle un availabile products
  const getUnAvailableProducts = () => {
    axios.get("http://localhost:4000/unavailableProducts").then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  };

  //handle checked or not
  const handleAvailabilityChange = (productId, available) => {
    const updatedProducts = products.map((product) => {
      if (product.ID === productId) {
        const updatedProduct = { ...product, available: !available };
        axios
          .put(
            `http://localhost:4000/updateProductAvailability/${productId}`,
            updatedProduct
          )
          .then((res) => {
            console.log(res.data);
            navigate("/");
            window.location.reload();
          })
          .catch((err) => console.error(err));
        return updatedProduct;
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  //handle delete product
  const handleDeleteProduct = async (productId) => {
    try {
      await axios
        .delete("http://localhost:4000/delete/" + productId)
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
      <div className="container w-75 bg-white rounded p-3 ">
        {/* <ProductForm /> */}
        <h1> My Products List</h1>
        {/* <div className="product__lists"> */}
        <table className="table table-hover table-bordered  table-striped ">
          <thead class="thead-dark">
            <tr>
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
        {/* </div> */}
      </div>

      <Footer />
    </>
  );
};

export default ProductList;
