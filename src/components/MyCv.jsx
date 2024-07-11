import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Divider, Grid, Typography } from "@mui/material";
import img1 from "../assets/mebg.png";
import generatePDF from "react-to-pdf";
import { useRef } from "react";
import "../App.css";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  width: {lg:"50%", xs:'100%'},
  height:{xs:'100vh', lg:'auto'},
  boxShadow: 24,
  borderRadius: "25px",
  p: 4,
 
};

const MyCv = (prop) => {
  const {
    open,
    handleClose,
    name,
    experience,
    occupation,
  } = prop;

  const targetRef = useRef();
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{display:'flex', justifyContent:{lg:"flex-end", xs:"center"}}}>
            <Button
            sx={{
              border: "2px solid #626fe6",
              borderRadius: "25px",
              color: "#626fe6",
              mb: 2,
              mt:2
            }}
            className="btn hvr-sweep-to-right"
            onClick={() => generatePDF(targetRef, { filename: "ShahzebCv.pdf" })}
          >
            Download
          </Button>
            </Box>
        
          <Box ref={targetRef}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item lg={12}  xs={12}>
                <Box
                  sx={{
                    border: "2px solid #efefef",
                    borderRadius: "100%",
                    background: "lightblue",
                    width: {lg:"250px",  xs:"170px"},
                    height:  {lg:"250px",  xs:"170px"},
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={img1}
                    alt="img1"
                    style={{
                      maxWidth: "100%",
                      height:     {lg:"200px",  xs:"80px"},
                     
                      margin: "auto",
                    }}
                  />
                </Box>
              </Grid>
              <Divider sx={{ mt: 2, mb: 2 }} />
              <Grid item lg={12}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      color: "#272343",
                      textDecoration: "none",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ fontWeight: 500, paddingRight: "4px" }}>
                      Name:
                    </span>{" "}
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#272343",
                      textDecoration: "none",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ fontWeight: 500, paddingRight: "4px" }}>
                      Job:
                    </span>
                    {occupation}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#272343",
                      textDecoration: "none",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {" "}
                    <span style={{ fontWeight: 500, paddingRight: "4px" }}>
                      Experiance:
                    </span>
                    {experience}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 2, mb: 2 }} />
<Grid container spacing={3}>
    <Grid item lg={6}>
    <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    textAlign: "center",
                    fontSize: "24px",
                  }}
                >
                  Skills
                </Typography>
      

            <Grid
              container
              spacing={4}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item lg={6} xs={4} sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Html/Html5
                </Typography>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Css2/Css3
                </Typography>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Javascript
                </Typography>

                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  React Js
                </Typography>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Next Js
                </Typography>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Typscript
                </Typography>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  React +VITE
                </Typography>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  React Native
                </Typography>
              </Grid>
              <Grid item lg={6} xs={4} sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Bootstrap
                </Typography>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Material Ui
                </Typography>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  AntD
                </Typography>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Tailwind Css
                </Typography>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Scss
                </Typography>
              </Grid>
              <Grid item lg={6} xs={4} sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Wordpress
                </Typography>

                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  DecoNetwork
                </Typography>
              </Grid>
              <Grid item lg={6}  sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Php
                </Typography>

                <Typography
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Nodejs
                </Typography>
              </Grid>
            </Grid>
    </Grid>
    <Divider  />
<Grid item lg={6} >
<Typography
                sx={{
                  color: "#272343",
                  textDecoration: "none",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Work Experiance
              </Typography>
  
            <Grid container spacing={4} justifyContent="center">
              <Grid item lg={5} xs={3}>
                <Typography
   
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    textAlign: "start",
                    fontSize:{lg:'20px', xs:'12px'},
                  }}
                >
                  Garment Printing
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    textAlign: "start",
                    fontSize:{lg:'16px', xs:'12px'},
                  }}
                >
                  Frontend Developer
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    textAlign: "start",
                    fontSize:{lg:'14px', xs:'10px'},
                  }}
                >
                  Jan 2024 to Current
                </Typography>
              </Grid>

              <Grid item lg={5} xs={3}>
                <Typography
   
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    textAlign: "start",
                    fontSize:{lg:'20px', xs:'12px'},
                  }}
                >
                  Orcalo Holdings
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    textAlign: "start",
                    fontSize:{lg:'16px', xs:'12px'},
                  }}
                >
                  React Developer
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    textAlign: "start",
                    fontSize:{lg:'14px', xs:'10px'},
                  }}
                >
                  April 2022 to Jan 5 2024
                </Typography>
              </Grid>
              <Grid item lg={5} xs={3}>
                <Typography
   
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    textAlign: "start",
                    fontSize:{lg:'20px', xs:'12px'},
                  }}
                >
                  National Savings
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    textAlign: "start",
                    fontSize:{lg:'16px', xs:'12px'},
                  }}
                >
                Web Developer
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    textAlign: "start",
                    fontSize:{lg:'14px', xs:'10px'},
                  }}
                >
                  Jan 2022 to Oct 2022
                </Typography>
              </Grid>    
              <Grid item lg={5} xs={3}>
                <Typography
   
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    textAlign: "start",
                    fontSize:{lg:'20px', xs:'12px'},
                  }}
                >
                  Corramers
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    textAlign: "start",
                    fontSize:{lg:'16px', xs:'12px'},
                  }}
                >
                  Php (Internship)
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#272343",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    textAlign: "start",
                    fontSize:{lg:'14px', xs:'10px'},
                  }}
                >
                  Sep 2021 to Dec 2021
                </Typography>
              </Grid>
            </Grid>
</Grid>


</Grid>
             

          
           
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default MyCv;
