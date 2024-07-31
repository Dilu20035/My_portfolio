import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import EarthCanvas from "../canvas/Earth";



const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  position: rlative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1urncpn', 'template_bk7xssd', form.current, {
        publicKey: 'IRm4y-LQTCzbec5lj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

  return (
    <div>
      <h1 style={{
        marginTop:'2rem',
        textAlign:'center',
        color:'white',
        fontWeight:'600'
      }}>Contact Us</h1>
    <Container>
      <form ref={form} onSubmit={sendEmail} style={{
          color:'white',
          backgroundColor:'#19243e6d',
          padding:'3rem 6rem 3rem 6rem',
          borderRadius: '1rem',
          margin:'2rem 3rem 3rem 3rem',
          display:'flex',
          flexDirection: 'column',
          justifyContent:'space-between'
          }}>
        <label style={{fontSize:'12px'}}>Name</label>
        <input type="text" name="user_name" className='form-control' placeholder='Your Name' style={{margin:'0 14rem 1rem 0', border:'none'}}/>
        <label style={{fontSize:'12px'}}>Email</label>
        <input type="email" name="user_email" className='form-control' placeholder='Your Email' style={{margin:'0 14rem 1rem 0', border:'none'}}/>
        <label style={{fontSize:'12px'}}>Message</label>
        <textarea name="message" className='form-control' placeholder='Your Message' style={{margin:'0 14rem 1rem 0', paddingBottom:'2rem', border:'none'}} />
        <input type="submit" value="Send" className='form-control btn ' style={{backgroundColor:'#513bcc', color:'white'}} />
        
      </form>
      <EarthCanvas />
    </Container>
    </div>
  )
}

export default Contact
