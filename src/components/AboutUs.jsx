import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import ProgressBar from "./ProgressBar";
import bg from "../assets/bg3.png";

const AboutUs = () => {
  return (
    <>
      <Grid container mt={2} id="about">
        <Grid item md={12} xs={12}>
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: 600,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            About Me
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          padding: "25px",
          flexWrap: {xs:'wrap-reverse' },
          textAlign: { sm: "center", xs: "center", md: "left" },
        }}
      >
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >

<img src={bg} alt="error "  style={{ maxWidth: "100%" }} />
        
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Box sx={{ mt: 3, mb: 4 }}>
            <Typography
              sx={{
                fontSize: { lg: "25px", md: "22px", sm: "22px", xs: "16px" },
                fontFamily: 'Montserrat, sans-serif',
              fontWeight:500 ,
                textTransform:'capitalize',
                textAlign: {
                  sm: "center",
                  xs: "center",
                  md: "left",
                  lg: "left",
                },
              }}
            >
              I am web developer .I have 4 years experiance in web development.
              I have expertise in Html5, css3, JS, ReactJS,Typescipt,
              Next.js,React Native, php ,material ui, scss, bootstrap, mySql,
              TailwindCss, AntDesign. My design are fully responsive and dynamic
              in all standard screens.
            </Typography>
          </Box>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item lg={2}  xs={4} sx={{ m: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                 
                  borderRadius: "20px",
                  boxShadow: "2px 2px 3px #c4cfd4, -2px -2px 3px #fff",
                 
                }}
               
              >
                <FacebookIcon
                  sx={{
                    fontSize: 100,
                    color: "#4267B2",
                  }}
                />
              </Box>
            </Grid>
            <Grid item lg={2} xs={4} sx={{ m: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  
                  borderRadius: "20px",
                  boxShadow: "2px 2px 3px #c4cfd4, -2px -2px 3px #fff",
                 
                }}
               
              >
                <GitHubIcon sx={{ fontSize: 100, color: "#967bb6" }} />
              </Box>
            </Grid>
            <Grid item lg={2} xs={4} sx={{ m: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
               
                  borderRadius: "20px",
                  boxShadow: "2px 2px 3px #c4cfd4, -2px -2px 3px #fff",
                 
                }}
                
              >
                
                <LinkedInIcon sx={{ fontSize: 100, color: "#0072b1" }} />
              </Box>
            </Grid>
            <Grid item lg={2} xs={4} sx={{ m: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
               
                  borderRadius: "20px",
                  boxShadow: "2px 2px 3px #c4cfd4, -2px -2px 3px #fff",
                 
                }}
                
              >
                <TwitterIcon sx={{ fontSize: 100, color: "#1DA1F2" }} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item md={8} xs={10}>
          <ProgressBar />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
