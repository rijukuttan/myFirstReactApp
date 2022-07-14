import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ProductServices from "../services/productServices";
const EditProduct = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialProductState = {
    id: null,
    productName: "",
    productPrice:"",
    imageUrl:"",
    describtion: "",
    category:"",
   
  };
  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const [message, setMessage] = useState("");
  const getProduct = id => {
    ProductServices.getProductById(id)
      .then(response => {
        setCurrentProduct(response.data);
        console.log(currentProduct);
        
      })
      .catch(e => {
        alert(e);
        console.log(e);
      });
     
  };
  useEffect(() => {
    if (id)
    getProduct(id);
  }, [id]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const updateProduct = () => {
    ProductServices.updateProduct(currentProduct, currentProduct.id)
      .then(response => {
        console.log(response.data);
        console.log(currentProduct);
         alert("Product Updated Successfully..!");
        navigate( "/productList");
        setMessage("The product was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="submit-form container logInForm row justify-content-center ">
         
    {currentProduct ? (
        
      <div className="edit-form col-lg-6 col-md-8 col-sm-10 m-4">
     <h4 className="formHeader">Edit Product</h4>
        <form className="row text-start ">
        <div className="form-group">
          <label className="col-lg-12 col-md-12 col-sm-12  m-2" htmlFor="productName">Title :</label>
          <input
            type="text"
            className="col-lg-12 col-md-12 col-sm-12"
            id="productName"
            required
            value={currentProduct.productName}
            onChange={handleInputChange}
            name="productName"
          />
        </div>
        <div className="form-group">
          <label className="col-lg-12 col-md-12 col-sm-12  m-2" htmlFor="describtion">Description :</label>
          <input
            type="text"
            className="col-lg-12 col-md-12 col-sm-12"
            id="describtion"
            required
            value={currentProduct.describtion}
            onChange={handleInputChange}
            name="describtion"
          />
        </div>
        <div className="form-group">
          <label className="col-lg-12 col-md-12 col-sm-12  m-2" htmlFor="price">Product Price :</label>
          <input
            type="text"
            className="col-lg-12 col-md-12 col-sm-12"
            id="productPrice"
            required
            value={currentProduct.productPrice}
            onChange={handleInputChange}
            name="productPrice"
          />
        </div>
        <div className="form-group">
          <label className="col-lg-12 col-md-12 col-sm-12  m-2" htmlFor="category">Category</label>
          <input
            type="text"
            className="col-lg-12 col-md-12 col-sm-12"
            id="category"
            required
            value={currentProduct.category}
            onChange={handleInputChange}
            name="category"
          />
        </div>
        <div className="form-group">
          <label className="col-lg-12 col-md-12 col-sm-12  m-2" htmlFor="imageUrl">Image Url :</label>
          <input
            type="text"
            className="col-lg-12 col-md-12 col-sm-12"
            id="imageUrl"
            required
            value={currentProduct.imageUrl}
            onChange={handleInputChange}
            name="imageUrl"
          />
        </div>
        </form>
  
    
        <button
          type="submit"
          className="btn-dark text-center mt-2 col-12"
          onClick={updateProduct}
        >
          Update
        </button>
        <p>{message}</p>
      </div>
    ) : (
      <div>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    )}
  </div>
  );
};
export default EditProduct;