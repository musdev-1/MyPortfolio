import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import emailjs from 'emailjs-com';

import "./style.css";

import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobile, setMobile] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  const handleMobile = (event) => {
    setMobile(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name)
    console.log(email)
    console.log(message)
    console.log(mobile)
    
  };

//   const sendEmail = (event) => {
// event.preventDefault();
// console.log('error')
// emailjs.sendForm('service_nfxn09s','template_yl9eulf',form.current,"jpxpVofbbXtNAYFZM0Nbr").then(res => {
//   console.log(res);
 
// }).catch(err=> 
//   console.log(err));
//   }

  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", color: "lightgray" }}
          >
            Contact Us
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <Box className="form">
            <label htmlFor="firstName">Your Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleName}
              value={name}
              placeholder="Your Name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleEmail}
              value={email}
              placeholder="Your Email"
            />
            <label htmlFor="message">Message</label>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              name="message"
              placeholder="Your Message"
              onChange={handleMessage}
              value={message}
              className="textArea"
            />
            <label htmlFor="mobile">Mobile</label>
           <input type="number" name="mobile" id="mobile" onChange={handleMobile} value={mobile} className="numbernpm " />
            <Button
            type='submit'
              sx={{
                borderRadius: "25px",
                border: "2px solid white",
                color: "white",
                fontWeight: 600,
                mt: 3,
                width: "100px",
              }}
              className="btn"
              onClick={handleSubmit}
           
            >
              Submit
            </Button>
          </Box>
        </Grid>
       
      </Grid>
    </>
  );
};

export default ContactForm;
