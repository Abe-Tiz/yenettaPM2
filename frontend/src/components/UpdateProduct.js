import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  // const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  //display all products when page is loading
  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((res) => {
        const product = res.data.find((product) => product.ID === id);
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setQuantity(product.quantity);
      })
      .catch((err) => console.error(err));
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:4000/updateProduct/" + id, {
        name,
        description,
        price,
        quantity,
      })
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

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
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label for="name"> Product Name : </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
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
              value={description}
              id="form4Example3"
              rows="4"
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
              value={price}
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
              name="quantity"
              value={quantity}
              onkeypress={handleKeyPress}
              onPaste={(event) => event.preventDefault()}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
