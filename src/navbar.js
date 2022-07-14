import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route ,Link,useNavigate,Navigate,useLocation} from "react-router-dom";
import { About } from './components/About';
import { Contact } from './components/Contact';
import { LogIn } from './components/users/LogIn';
import { SignIn } from './components/users/signIn';
import Products from './components/product/Products';
import AddProduct from './components/product/addProduct';
import EditProduct from './components/product/editProduct';
import ListProductComponent from './components/product/productList';
import * as React from "react";
import Auths from './components/users/auth';
import Auth from './components/AuthUser';
import FilterProduct from './components/product/filterProduct';
import {ProtectedRoute} from "./components/protectedRoute";
import Pagination from './components/pagination';
import {BsBoxArrowInRight}  from "react-icons/bs";
import {BsBoxArrowLeft}  from "react-icons/bs";

//import AuthUser from './components/users/LogIn'



function BasicExample() {
  //const { authenticate, logout} = AuthUser();
  const navigate = useNavigate();
  const location = useLocation();


  const handleLogout = () => {
    //logout();
    alert(Auth.currentUserName());
    Auth.logout();
    navigate("/");
  };
  function RequireAuthentication({ children }) {
 
    const location = useLocation();
  const auth=Auth.isAuthenticated;
 
    return Auth.isAuthenticated() === true ? (
      children
    ) : (
      <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
  }


    return (
        
    <div>
      <Navbar className="navbar navbar-dark bg-dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CG-Vak STORE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link as={Link} to="/FilterProduct">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
           
              {/* <Nav.Link as={Link} to="/Pagination">pagination</Nav.Link> */}
              {/* <Nav.Link as={Link} to="/productList">product List</Nav.Link>
              <Nav.Link as={Link} to="/AddProduct">AddProduct</Nav.Link>
              <Nav.Link as={Link} to="/FilterProduct">Filter Product</Nav.Link> */}
              <NavDropdown title="Admin" id="basic-nav-dropdown">
             
                <NavDropdown.Item as={Link} to="/productList">product List</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/AddProduct">
                AddProduct
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
              
              
            </Nav>
            <Nav className="ms-auto">
            {Auth.authenticated && <Nav.Link as={Link}  to="/FilterProduct">Hello {Auth.currentUserName()}</Nav.Link>}
            {Auth.authenticated===false && <Nav.Link as={Link}  to="/signIn">SignUp</Nav.Link>}
            {Auth.authenticated===false && <Nav.Link as={Link} style={{color: "white"}} to="/LogIn"><BsBoxArrowInRight/></Nav.Link>}
              {Auth.authenticated && <Nav.Link  onClick={handleLogout}><BsBoxArrowLeft/></Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
       
      </Navbar>
   <div>
   <Routes>
   <Route path="/" element={<FilterProduct/>}/>
   <Route path="/product" element={<Products/>}/>
        <Route path="/about" element={ <RequireAuthentication><About/> </RequireAuthentication>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/AddProduct" element={<RequireAuthentication><AddProduct/></RequireAuthentication>}/>
        <Route path="/FilterProduct" element={<FilterProduct/>}/>
        <Route path="/EditProduct/:id" element={<RequireAuthentication><EditProduct/></RequireAuthentication>}/>
        <Route path="/Pagination" element={<Pagination/>}/>
        {/* <GuardedRoute path = "/productList"  component={<ListProductComponent/>} auth {...isAutheticated} /> */}
        <Route  path = "/productList" element={     
       <RequireAuthentication><ListProductComponent/></RequireAuthentication> 
      }/>
    </Routes>
   </div>


  </div>
     
    );
  }
  
  export default BasicExample;