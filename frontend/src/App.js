import {
  BrowserRouter, 
  Routes,
  Route
 } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from "./components/ProductList";
import ProductForm from './components/ProductForm';
import UpdateProduct from "./components/UpdateProduct";
 
function App() {
  return (
    <div className="container_product">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/addProduct" element={<ProductForm />} />
          <Route path="/updateProduct/:id" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
