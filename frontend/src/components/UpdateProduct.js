import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      axios.put("http://localhost:4000/updateProduct/" + id, {
        name,
        description,
        price,
        quantity
      })
      .then((res) => {
        navigate("/");
        console.log(res);
      })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex vh-100 product__add justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Update Products</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label for="name"> Product Name : </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label class="form-label" for="form4Example3">
              Description :{" "}
            </label>
            <textarea
              class="form-control"
              value={description}
              id="form4Example3"
              rows="2"
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              class="form-label"
              for="form4Example3"
            >
              Enter quantity :
            </label>
            <input
              type="Number"
              className="form-control"
              placeholder="Enter quantity"
              id="price"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-50"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
