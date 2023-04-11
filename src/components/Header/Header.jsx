import React from 'react'
import { Carousel} from 'react-bootstrap'

import Services from './../Services/Services';
import './header.css';

import bg1img from "./../images/mainbg1.jpg";
import bg2img from "./../images/slide-3.jpg";


function Header() {
  
    return (
        <>
            <Carousel interval={3000} fade>
                <Carousel.Item>
                    <img className='d-block w-100' src={bg1img} alt='first Slide' />
                    <Carousel.Caption className='carousel-content'>
                        <h3>FUNDS SIMPLIFIED</h3>
                        <p>Digital bridge between you and funds</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img className='d-block w-100' src={bg2img} alt='Third Slide' />
                    <Carousel.Caption className='carousel-content'>
                        <h3>FUNDS  SIMPLIFIED</h3>
                        <p>We research and build Fintech solutions using the latest of AI & ML  </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* Request quote */}
            <section id='hero' className='hero'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9 text-center text-lg-left'>
                            <h3>We are a diversified <span>Fintech Solutions Provider</span> with strong <span>AI-ML</span> focus</h3>
                        </div>
                        <div className='col-lg-3 hero-btn-container text-center'>
                            <a className='hero-btn align-middle' href='/contact'>Request a Quote</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* SERVICE */}
            <section className='servicesSEC'>
                <div className='container'>
                <Services />
                </div>
            </section>
        </>
    )
}

export default Header
