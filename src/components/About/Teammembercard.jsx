import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

function Teammodals(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="card-button" onClick={handleShow}>
        Profile
      </button >

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          {props.description}
          </p>
          <h6>Contact: {props.email}</h6>
        </Modal.Body>
        <Modal.Footer>
                  
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default function Teammembercard(props) {
  return (
    <div className="teamcard">
      <img className="person--image" src={props.imgurl} alt="person image" />
      <h4>{props.name}</h4>
      <h6>{props.desig}</h6>
      <h6>
      <a href={props.linkedinurl} >
        <FontAwesomeIcon icon={faLinkedin}  size="2x" color="blue"/> 
      </a>
      </h6>
          
      <Teammodals 
      name={props.name}
      description={props.description}
      email={props.email}
      
      />
      
    </div>
  );
}
