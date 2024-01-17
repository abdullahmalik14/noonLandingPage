import React from 'react'

  import logo from '../images/noonlogo.png';
  import flag from '../images/flag.png';
  import Container from 'react-bootstrap/Container';
  import Form from 'react-bootstrap/Form';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import LoginIcon from '@mui/icons-material/Login';
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
  function NavScrollExample() {
    return (
      <Navbar expand="lg" className="" style={{backgroundColor:"yellow", height: '80px'}}>
        <Container fluid>
          <Navbar.Brand href="#"><img  src={logo} alt="" /></Navbar.Brand>
          <img style={{marginTop:"-10px"}} src={flag} alt="" />
          <p style={{marginTop:"5px"}}>Deliver to <br /> <b>Dubai</b></p>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            
            </Nav>
           
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{marginLeft:"-1050px" , width:"700px"}}
              />
             
            </Form>
            <div className='d-flex' style={{marginTop:"5px"}}>
                <p style={{marginLeft:"-330px",marginRight:"5px"}}>العربية</p> |
                <p style={{marginLeft:"10px",marginRight:"5px"}}> <b><LoginIcon style={{fontSize:"20px",marginRight:"5px"}}/>Log In</b> </p> |
                <p style={{marginLeft:"10px",marginRight:"5px"}}> <FavoriteBorderIcon style={{fontSize:"20px",marginRight:"5px"}} /> <b>Wishlist</b> </p> |
                <p style={{marginLeft:"10px"}}> <ShoppingCartCheckoutIcon style={{fontSize:"20px",marginRight:"5px"}}/> <b>cart</b> </p>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavScrollExample;