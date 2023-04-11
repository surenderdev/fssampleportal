import React from 'react'
import './Contact.css';

import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import {Container}  from 'react-bootstrap'; 
import Alert from 'react-bootstrap/Alert';

import emailjs from 'emailjs-com';

import bg1img from "./../images/slide-2.jpg";


const Contact = () => {
    const {
        register, handleSubmit, formState: { errors },
        reset,
        trigger,
    } = useForm();
    const onSubmit = (data) => {
       
        emailjs.send('service_hg9n5ur', 'template_5recrmm', data, 'oc8Hpeos8WdE7X6BT');
        console.log(data);
        reset();
        <Container className='p-4'>
            <Alert variant="info">
               <Alert.Heading>Your message was successfully sent. We will get back to you soon </Alert.Heading>  
            </Alert>
        </Container>
        console.log("Success")
    };
    return (
        <>
            <img className='d-block w-100' src={bg1img} alt='first Slide' />
            <section className='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>

                            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                                <h4>We are always happy to serve you <br/>
                                    Do not hesitate to contact us for any query</h4>
                                <br />
                                <div className='row'>
                                    <div className='col form-group'>
                                        <label className="col-form-label">Name:</label>
                                        <input type='text' name='name' className={`form-control ${errors.name && "invalid"}`}
                                            {...register("name", { required: "Name is Required" })}
                                            onKeyUp={() => {
                                                trigger("name");
                                            }} />
                                        {errors.name && (
                                            <small className="text-danger">{errors.name.message}</small>
                                        )}
                                    </div>
                                    <div className='col form-group'>
                                        <label className="col-form-label">Email:</label>
                                        <input type='text' name='email' className={`form-control ${errors.email && "invalid"}`}
                                            {...register("email", {
                                                required: "Email is Required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger("email");
                                            }} />
                                        {errors.name && (
                                            <small className="text-danger">{errors.email.message}</small>
                                        )}
                                    </div>
                                    <div className='col form-group'>
                                        <label className="col-form-label">Phone:</label>
                                        <input type='text' name='contact_number' className={`form-control ${errors.contact_number && "invalid"}`}
                                            {...register("contact_number", {
                                                required: "Contact Mobile Number is Required",
                                                pattern: {
                                                    value: /^[6-9]\d{9}$/gi,
                                                    message: "Invalid mobile number: 1) length=10 and 2)start with numbers [6 to 9]",
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger("contact_number");
                                            }} />
                                        {errors.name && (
                                            <small className="text-danger">{errors.contact_number.message}</small>
                                        )}
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label className="col-form-label">Subject:</label>
                                    <input type='text' name='subject' className={`form-control ${errors.subject && "invalid"}`}
                                        {...register("subject", { required: "Subject is Required" })}
                                        onKeyUp={() => {
                                            trigger("subject");
                                        }} />
                                    {errors.name && (
                                        <small className="text-danger">{errors.subject.message}</small>
                                    )}
                                </div>
                                <div className='form-group'>
                                    <label className="col-form-label">Message:</label>
                                    <textarea type='text' name='message' className={`form-control ${errors.message && "invalid"}`}
                                        {...register("message", {
                                            required: "Message is Required",
                                            minLength: {
                                                value: 10,
                                                message: "Minimum Required length is 10",
                                            },
                                            maxLength: {
                                                value: 150,
                                                message: "Maximum allowed length is 150 ",
                                            }
                                        })}
                                        onKeyUp={() => {
                                            trigger("message");
                                        }} />
                                    {errors.name && (
                                        <small className="text-danger">{errors.message.message}</small>
                                    )}
                                </div>
                                <div className='text-center'>
                                    <button type='submit'>Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-lg-4'>
                            <div className='info-box mb-4'>
                                <h3>For Inquiries Contact:</h3>
                                <Icon className='icon' icon="bx:phone-call" />
                                {/* <h3>Call Us</h3> */}
                                <p>+91-7660888898</p><br />
                                <Icon className='icon' icon="bx:envelope" />
                                {/* <h3>Email Us</h3> */}
                                <p>fundssimplified@info.com</p>
                            </div><br />
                            <div className='info-box mb-4'>
                            <h3>Address:</h3>
                            <Icon className='icon' icon="bx:building" />
                                 <p>
                                    Sai Dwarakamai Complex, Flat 401 <br />                  
                                    Hitension Road, Above Medplus  <br />
                                    Mithra Hills, Hydernagar <br />
                                    Nizampet, Hyderabad <br />
                                    Telangana - 500090   
                                    
                                  </p>         
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact