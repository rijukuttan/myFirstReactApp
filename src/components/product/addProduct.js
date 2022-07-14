import React, { useState } from "react";
import productService from '../services/productServices'
import './form.css';
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const initialProductState = {
    id: null,
    productName: "",
    productPrice:"",
    imageUrl:"",
    category:"",
    describtion: "",
   
  };
  const navigate = useNavigate();
  const [addProduct, setProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...addProduct, [name]: value });
  };
  const saveProduct = () => {
    var data = {
      productName: addProduct.productName,
      describtion: addProduct.describtion,
      category:addProduct.category,
      productPrice:addProduct.productPrice,
      imageUrl:addProduct.imageUrl
    };
    productService.createProduct(data)
      .then(response => {
        setProduct({
            productName: addProduct.productName,
            describtion: addProduct.describtion,
            category:addProduct.category,
            productPrice:addProduct.productPrice,
            imageUrl:addProduct.imageUrl
        });
        setSubmitted(true);
        console.log(response.data);
        alert(("Product added successfully"));
        navigate( "/productList");
      })
      .catch(e => {
        alert((e));
        console.log(e);
      });
  };
  const newProduct = () => {
    setProduct(initialProductState);
    setSubmitted(false);
  };
  return (
    
    <div className="submit-form container logInForm row justify-content-center ">
   
      
   
      <div  className=" col-lg-7 col-md-8 col-sm-10 m-4" >
      <h4 className="formHeader" bg="primary">Add Product</h4>
      <form className="row text-start">
        <div className="form-group">
          <label className="col-lg-12 col-md-12 col-sm-12  m-2" htmlFor="productName">Title</label>
          <input
            type="text"
            className="col-lg-12 col-md-12 col-sm-12"
            id="productName"
            required
            value={addProduct.productName}
            onChange={handleInputChange}
            name="productName"
          />
        </div>
        <div className="form-group">
          <label className="col-lg-12 col-md-12 col-sm-12  m-2" htmlFor="describtion">Description</label>
          <input
            type="text"
            className="col-lg-12 col-md-12 col-sm-12"
            id="describtion"
            required
            value={addProduct.describtion}
            onChange={handleInputChange}
            name="describtion"
          />
        </div>
        <div className="form-group">
          <label className="col-lg-12 col-md-12 col-sm-12  m-2" htmlFor="price">Product Price</label>
          <input
            type="text"
            className="col-lg-12 col-md-12 col-sm-12"
            id="productPrice"
            required
            value={addProduct.productPrice}
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
            value={addProduct.category}
            onChange={handleInputChange}
            name="category"
          />
        </div>
        <div className="form-group">
          <label className="col-lg-12 col-md-12 col-sm-12  m-2" htmlFor="imageUrl">Image Url</label>
          <input
            type="text"
            className="col-lg-12 col-md-12 col-sm-12"
            id="imageUrl"
            required
            value={addProduct.imageUrl}
            onChange={handleInputChange}
            name="imageUrl"
          />
        </div>
      
        </form>
        <button onClick={saveProduct} className=" mt-3 btn btn-dark btn-block col-6">
          Add Product
        </button>
      </div>
  
  </div>
  );
};
export default AddProduct;