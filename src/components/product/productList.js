


import React, { Component ,useState, useEffect } from 'react'

import productService from '../services/productServices';

import ReactPaginate from 'react-paginate';
import '../pagination.css';
import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router';
import {BsFillTrashFill}  from "react-icons/bs";
import {BsEyedropper}  from "react-icons/bs";

import { BrowserRouter, Routes, Route ,Link,Router} from "react-router-dom";

class ListProductComponent extends Component
 {
    constructor(props) {
        super(props)        
        //let navigate = useNavigate();
        // const [postsPerPage] = useState(5);
        // const [offset, setOffset] = useState(1);
        // const [posts, setAllPosts] = useState([]);
         //const [pageCount, setPageCount] = useState(0)   
        this.state = {
                products:[],
                postsPerPage:4,
                offset:1,
                posts:[],
                pageCount:0,
        }
        this.handlePageClick = this
        .handlePageClick
        .bind(this);
        // this.addproduct = this.addproduct.bind(this);
        // this.editproduct = this.editproduct.bind(this);
       // this.deleteproduct = this.deleteproduct.bind(this);
       //const deleteproduct = deleteproduct.bind(this);
      
        //const { navigate } = this.props;       
    }
//    deleteproduct(id){
//         alert("fhsdkl");
//         productService.deleteProduct(id).then( res => {
//             this.setState({products: this.state.products.filter(products => products.id !== id)});
//         // productService.deleteProduct(id).then( res => {
//         //     this.setState({products: this.state.products.filter(products => products.id !== id)});
//         //     alert("product deleted successfully..!");
//         //     //this.setState({offset: selectedPage + 1});
//         // });
//         })
//     }
    //  handleClick() {
    //     this.props.history.push('/AddProduct')       
    //   }
  
    // viewProduct(id){
    //     this.props.history.push(`/view-employee/${id}`); 
        
    // }
    // editproduct(id){
    //     this.props.history.push(`/add-employee/${id}`);
    // }
     handlePageClick(event){
        const selectedPage = event.selected;
        this.setState({offset: selectedPage + 1});
        //this.getAllPosts();
        //setOffset(selectedPage + 1)
      };
    
    componentDidMount(){
        // productService.getProduct().then((res) => {
        //     this.setState({ products: res.data});
        // });
     
        //end
    }
 
    //  addproduct(){
    // //     const selectedPage = event.selected;
    // //     this.setState({offset: selectedPage + 1});
    // //     this.getAllPosts();
    // //     //let history = useHistory();
    // //     //history.push("/AddProduct");
    // //     //this.props.history.push('/AddProduct');
    //  }
   
   
     
      
    render() {
     
        productService.getProduct().then( res => {
            //this.setState({products:res.data})
            const data = res.data;
            //alert()
            //const data = this.state.products;
            //alert(this.state.postsPerPage);
            const slice = data.slice(this.state.offset - 1 , this.state.offset - 1 + this.state.postsPerPage)         
            // For displaying Data
            const postData = getPostData(slice)         
            // Using Hooks to set value
            this.setState({ posts: postData});
           // setAllPosts(postData)
           this.setState({ pageCount: Math.ceil(data.length / this.state.postsPerPage)});
          const deleteproduct=(id)=>{
            //alert("fhsdkl");
            productService.deleteProduct(id).then( res => {
                this.setState({products: this.state.products.filter(products => products.id !== id)});
                alert("product deleted successfully..!");
                //deleteproduct.bind(this);
                //this.setState({offset: selectedPage + 1});
            });
        }
     
         function getPostData(data){
            
            return (
             
              data.map(post => 
                 <tr className="container paginationData" key={post.id}>
                                             <td className='col-lg-2'> {post.productName} </td>   
                                             <td className='col-lg-2'> {post.productPrice}</td>
                                             <td className='col-lg-2'> {post.describtion}</td>
                                             <td className='col-lg-2'> {post.imageUrl}</td>
                                             <td>
                                             <Link
                                                to={"/EditProduct/" + post.id}
                                                className="btn btn-info"
                                                >
                                                    <BsEyedropper/>
                                            </Link>                                             
                                                 <button style={{marginLeft: "10px"}} onClick={ () => deleteproduct(post.id)} className="btn btn-danger"><BsFillTrashFill/> </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(post.id)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
              )
            );         
          }       
        });    
      
        return (
          
            <div className="container ">
                 <h2 className="text-center">Product List</h2>
                 <div className='d-flex justify-content-end' >
                 <Link md='6'
                to={"/AddProduct"}
                className="btn btn-primary text-right " 
              >
                Add Product
              </Link>
                 </div>
            
 
               
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Title</th>
                                    <th> Price</th>
                                    <th>Description</th>
                                    <th> Image Url</th>
                                    <th> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.posts}
                           
                            </tbody>
                        </table>

                 </div>
                 <div className="main-app">
    
    {/* Display all the posts */}
 

    {/* Using React Paginate */}
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={this.state.pageCount}
      onPageChange={this.handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"} />
  </div>

            </div>
        )
    }
}

export default ListProductComponent; 