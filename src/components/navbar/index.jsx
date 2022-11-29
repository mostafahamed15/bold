import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsMoon } from 'react-icons/bs'
 import React, {  useState } from "react";
import  "./styles.css";
import AnimatedCursor from "react-animated-cursor"
function NavBarCom() {
  const [border, setBorder] = useState("3px solid red");
  const    [background ,setBackground] = useState("transparant");
  return (
<>
<AnimatedCursor 
   
    outerStyle={{
      border:`${border}`,
     width:"50px",
      height:"50px",
      background:`${background}`
     }}
     innerSize={0}
      outerSize={20}      
      outerScale={1.7}
    
    />
<Navbar  expand="lg" className='py-0 animat'  onMouseEnter={() => {
          setBorder("0px solid #ff000052");
          setBackground("#ff000052")
        }}
        onMouseLeave={() => {
          setBackground("")
          setBorder("3px solid red");
        }}>
      <Container className='position-relative '>
 
   <div className='logo '>
    <svg  viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="pictogram m-0 " ><path d="M10 0L15 7.999H5L10 0Z" fill="#F43333"></path><path d="M5 7.99902L10 15.998H0L5 7.99902Z" fill="#F43333"></path><path d="M15 7.99902L20 15.998H10L15 7.99902Z" fill="#F43333"></path></svg>
    </div>
   
 
   <a href="#home" className='  my-0  mx-5 fs-3 animate__animated animate__backInDown animate__delay-3s' >RIANGLE</a>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
        
          <Nav className=' animate__animated animate__backInDown animate__delay-3s'  >
            <Nav.Link href="#deets" className=' p-4 '   >WORK</Nav.Link>
            <Nav.Link href="#deets" className=' p-4'>ABOUT</Nav.Link>
            <Nav.Link href="#deets" className='p-4 '>STORIES</Nav.Link>
            <Nav.Link href="#deets" className='p-4 '>CONTACT</Nav.Link>
            <Nav.Link href="#deets" className='p-4  '><BsMoon/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
      </Container>
      <div className="loader"></div>
    </Navbar>

</>
  );
}

export default NavBarCom;