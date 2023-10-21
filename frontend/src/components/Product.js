import React from 'react'
import { Link } from 'react-router-dom';
import '../style/productList.css'

const Product = ({
  product,
  handleDeleteProduct,
  handleAvailabilityChange,
}) => {


  const handleDeleteProducts = () => {
    handleDeleteProduct(product.ID);
  }

  const handleAvailabilityChanges = () => {
    handleAvailabilityChange(product.ID, product.available);
  }

  return (
    <>
      <tr key={product.ID}>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price} br</td>
        <td>
          <label>
            <input
              type="checkbox"
              checked={product.available}
              onChange={() =>
                handleAvailabilityChanges(product.ID, product.available)
              }
            />
            {product.available ? "In Stock" : "Out Of Stock"}
          </label>
        </td>
        <td>
          <div className='btn-action'>
            <Link to={`/updateProduct/${product.ID}`} class="btn btn-primary">
              Update
            </Link>
            <button
              class="btn btn-danger"
              onClick={(e) => handleDeleteProducts(product.ID)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
      {/* <div class="card-body">
        
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text">{product.description}</p>
        <p class="card-text">Price: {product.price} br</p>
        <div>
          <label>
            <input
              type="checkbox"
              checked={product.available}
              onChange={() =>
                handleAvailabilityChanges(product.ID, product.available)
              }
            />
            {product.available ? "In Stock" : "Out Of Stock"}
          </label>
        </div>

        <div className="btn">
          <Link to={`/updateProduct/${product.ID}`} class="btn btn-primary">
            Update
          </Link>
          <button
            class="btn btn-danger md-2"
            onClick={(e) => handleDeleteProducts(product.ID)}
          >
            Delete
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Product