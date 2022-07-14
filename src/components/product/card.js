import React from "react";
import Counter from "./counter";
const Card = ({ item }) => {            
           // destructuring props
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
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
        </div>
      </div>
    </>
  );
};
 
export default Card;