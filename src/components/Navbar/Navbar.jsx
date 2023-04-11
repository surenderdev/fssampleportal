import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import { LinkContainer } from 'react-router-dom';
import './navbar.css';
import { LinkContainer } from 'react-router-bootstrap';
import logoimg from "./../images/logo1.jpg";


const Navbarcustom = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='sm' sticky='top' style={{backgroundColor:"#3A9BDC",Color:"#FFFFFF"}}  >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="#home">  
                        
                        <img src={logoimg} alt="logo img" width="55" height="50" border-radius="30"/>                                                                        
                           
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className='mr-auto my-2 my-lg-0'
                            style={{
                                maxHeight: '150',
                                textTransform: 'uppercase',
                                fontWeight: '800',
                                text:'#FFFFFF',
                            }} navbarScroll >
                            <LinkContainer to="/">
                                <Nav.Link className='sm-highlight'>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link className='sm-highlight'>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/services">
                                <Nav.Link className='sm-highlight'>Services</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link className='sm-highlight'>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbarcustom