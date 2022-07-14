import React, { useState , Component } from "react";
import Data from "../data";
import Card from "./card";
import Counter from "./counter";
 

import productServices from "../services/productServices";


//start
class FilterProduct extends Component
 {
    constructor(props) {
        super(props)

        this.state = {
                product: [],
                category:[],
                
        }
      
    }


    viewProduct(id){
        this.props.history.push(`/view-employee/${id}`);
    }
 

    componentDidMount(){
        productServices.getProduct().then((res) => {
            this.setState({ product: res.data});
            this.setState({ category: res.data});
            //this.setState({ products: res.data});
          });
    }


    render() {
     
        const filterItem = async(curcat) => {
            const newItem = this.state.category.filter((newVal) => {
              return newVal.category === curcat; 
                    // comparing category for displaying data
            });
            this.setState({ product: newItem});
          };
         
   // const [product, setProduct] = useState();
  
    const menuItems = [...new Set(this.state.category.map((Val) => Val.category))];
     // const [item, setItem] = useState(Data);
        const Buttons = ({ menuItems }) => {
    
            return (
              <>
                <div className="d-flex justify-content-center">
                  {menuItems.map((Val, id) => {
                    return (
                      <button
                        className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                        onClick={() => filterItem(Val)}
                        key={id}
                      >
                        {Val}
                      </button>
                    );
                  })}
                  <button
                    className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
                    onClick={() =>  this.setState({ product: this.state.category})}
                  >
                    All
                  </button> 
                 </div>
              </>
            );
          };
        return (
            <div className="mt-5">
            <Buttons menuItems={menuItems}/>
              <div className="container">
                <div className="row">
                  {/* <h1 className="col-12 text-center my-3 fw-bold">Our Menu</h1> */}
                  {this.state.product.map((Val) => {
            return (
                <div className="col-lg-4 col-md-3 col-sm-6 parentCard mt-5" key = {Val.id}>
                <div className=" item">
                <div className="card item-card card-block">
                
                <img className="text-center" src={Val.imageUrl} alt="Photo of sunset"/> 
                <h4 className="item-card-title text-left">{ Val.productPrice}</h4>    
                <h5 className="card-title  mt-3 mb-3">{ Val.productName}</h5>
                <p className="">{Val.describtion}</p> 
                <Counter/>
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
            //   <div
            //     className="col-md-4 col-sm-6 card my-3 py-3 border-0"
            //     key={Val.id}
            //   >
            //     <div className="card-img-top text-center">
            //       <img src={Val.img} alt={Val.title} className="photo w-75" />
            //     </div>
            //     <div className="card-body">
            //       <div className="card-title fw-bold fs-4">
            //         {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
            //         {Val.price}
            //       </div>
            //       <div className="card-text">{Val.desc}</div>
            //     </div>
            //   </div>
            );
          })}
                  {/* <Card item={this.state.product} />  */}
                </div>
              </div>
            </div>
          
        )
    }
}

export default FilterProduct;
//end