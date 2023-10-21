import React from 'react'
import { Link } from 'react-router-dom';
import '../style/productList.css'

const Product = ({
  product,
  handleDeleteProduct,
  handleAvailabilityChange,
}) => {

//handle unavailable product
  const handleDeleteProducts = () => {
    handleDeleteProduct(product.ID);
  }

  //handle available products
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
              {
                product.available ? "In Stock" : "Out Of Stock"
              }
          </label>
        </td>
        <td>
          <div className='btn-action'>
            <Link 
              to={`/updateProduct/${product.ID}`} 
              class="btn btn-primary"
            >
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
    </>
  );
};

export default Product