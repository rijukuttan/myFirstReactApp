import React, { Component} from 'react'
import productService from '../services/productServices'
import "./product.css";
class Products extends Component
 {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
      
    }


    viewProduct(id){
        this.props.history.push(`/view-employee/${id}`);
    }
 

    componentDidMount(){
        productService.getProduct().then((res) => {
            this.setState({ products: res.data});
        });
    }


    render() {
        return (
            <div className='container'>
                  <div className="row ">
          
          {
              this.state.products.map(
                  products => 
                  <div className="col-lg-4 col-md-3 col-sm-6 parentCard mt-5" key = {products.id}>
<div className=" item">
<div className="card item-card card-block">

<img className="text-center" src={products.imageUrl} alt="Photo of sunset"/> 
<h4 className="item-card-title text-left">{ products.productPrice}</h4>    
<h5 className="card-title  mt-3 mb-3">{ products.productName}</h5>
<p className="">{products.describtion}</p> 
<div className="row justify-content-center text-center">
<button
          type="submit"
          className="btn-success text-center m-2 col-4"
          
        >
          Add To Cart
        </button>
        <button
          type="submit"
          className="btn-primary text-center m-2 col-3"
         
        >
          Buy Now
        </button>
</div>
</div>
</div>
</div>
//
       
              )
          }


</div>
            </div>
          
        )
    }
}

export default Products;

                
              
         
            
       
 
