import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();


  //handle submit
  const handleSubmit = (e) => {
    try {
        e.preventDefault();
    axios.post("http://localhost:4000/addProduct", {
        name,
        description,
        price,
        quantity,
      })
      .then((res) => {
        navigate("/");
        console.log(res);
      })
    } catch (error) {
      console.error(error);
    }
    
  };

  //handle key press 
  const handleKeyPress = (event) => {
    const charCode = event.which || event.keyCode;
    if ((charCode > 31 && charCode < 48) || charCode > 57) {
      event.preventDefault();
    }
  };
  

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Add Products</h2>
        <form className="profduct__form" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label for="name"> Product Name : </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label class="form-label" for="form4Example3">
              Description :{" "}
            </label>
            <textarea
              class="form-control"
              id="form4Example3"
              rows="2"
              required
              placeholder="description here..."
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-2">
            <label class="form-label" for="form4Example3">
              Enter Price :
            </label>
            <input
              type="Number"
              className="form-control"
              placeholder="Enter Price"
              id="price"
              name="price"
              onkeypress={handleKeyPress}
              onPaste={(event) => event.preventDefault()}
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label class="form-label" for="form4Example3">
              Enter quantity :
            </label>
            <input
              type="Number"
              className="form-control"
              placeholder="Enter quantity"
              id="price"
              name="price"
              onkeypress={handleKeyPress}
              onPaste={(event) => event.preventDefault()}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-50 m-20">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
