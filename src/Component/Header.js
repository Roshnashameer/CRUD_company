import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <Navbar className="bg-info" variant="dark">
    <Container>
     
    <Link to={'/'} style={{textDecoration:'none'}}>
        <Navbar.Brand href="#home" >
                <img
                  alt=""
                  src="https://i.postimg.cc/ryDVY3LG/CS-Logo-New.jpg"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />{' '}
                <span style={{ marginLeft: '10px', fontFamily: 'Arial, sans-serif', fontSize: '1.5rem' }}>CompanySync</span>
              </Navbar.Brand>
    
    </Link>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header