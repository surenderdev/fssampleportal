import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';


import './footer.css';

function Footer() {
    return (
        <>
            <footer id='footer' className='footer'>
                <div className='footer-top'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-6 footer-contact'>
                                <h3>Funds Simplified</h3>
                              
                                <p>
                                    Sai Dwarakamai Complex, Flat 401 <br />                  
                                    Hitension Road, Above Medplus  <br />
                                    Mithra Hills, Hydernagar <br />
                                    Nizampet, Hyderabad <br />
                                    Telangana - 500090   <br />
                                    
                                  
                                    <strong>Phone:</strong> 91-7660888898<br></br>
                                    <strong>Email:</strong> simplifiedfunds@gmail.com<br></br>
                                </p>
                            </div>
                            <div className='col-lg-4 col-md-6 footer-links'>
                                <h4>Layout</h4>
                                <br/>
                                 <ul>

                                    <li>
                                    <LinkContainer to="/">
                                    <Nav.Link>Home</Nav.Link>
                                    </LinkContainer>
                                    </li>
                                    
                                    <li>
                                    <LinkContainer to="/about">
                                    <Nav.Link>About Us</Nav.Link>
                                    </LinkContainer>
                                    </li>

                                    <li>
                                    <LinkContainer to="/services">
                                    <Nav.Link>Services</Nav.Link>
                                    </LinkContainer>
                                    </li>

                                    <li>
                                    <LinkContainer to="/contact">
                                    <Nav.Link>Contact Us</Nav.Link>
                                    </LinkContainer>
                                    </li>

                                </ul>
                            </div>
                            <div className='col-lg-4 col-md-6 footer-newsletter'>
                                <h4>Do You Need Help With Anything?</h4>
                                <p>Receive updates, hot deals, discounts sent straignt in your inbox every month</p>
                                <form action='' method='post'>
                                    <input name='email' /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container d-md-flex py-4'>
                    <div className='me-md-auto text-center text-md-start'>
                        <div className='copyright'>
                            &copy;<strong> <span> 2023</span></strong>. Funds Simplified. Designed By Surender Varma
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer