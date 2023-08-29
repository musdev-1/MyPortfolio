import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import img1 from "../assets/mebg.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styled } from "@mui/material/styles";
import ProgressBar from "./ProgressBar";

const AboutUs = () => {
  return (
    <>
      <Grid container mt={2}>
        <Grid item md={12} xs={12}>
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight:600
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
          textAlign: { sm: "center", xs: "center", md: "left" },
        }}
      >
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sx={{ display: "flex", justifyContent: "center", padding:'1.5rem' }}
        >
          <Box
            sx={{
              borderRadius: "40% 70% 70% 40% / 50% 30% 70% 70% ",
              background: "lightblue",
              boxShadow: "2px 2px 3px #c4cfd4, -2px -2px 3px #fff",
            }}
          >
            <img src={img1} alt="" width={400} />
          </Box>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Box sx={{ mt: 3, mb: 4 }}>
            <Typography
              sx={{
                fontSize: { lg: "25px", md: "22px", sm: "22px", xs: "16px" },
                fontFamily: "Montserate",
                fontWeight: 500,
                textAlign: {
                  sm: "center",
                  xs: "center",
                  md: "left",
                  lg: "center",
                },
              }}
            >
              I am web developer .I have 3 years experiance in web development. I have
              expertise in Html5, css3, JS, ReactJS,,Typescipt, Next.js,React Native, php ,material ui, scss,
              bootstrap, mySql, TailwindCss, AntDesign. My design are fully
              responsive and dynamic in all standard screens.
            </Typography>
          </Box>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item lg={2} sx={{ m: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  background: "#e6f4f9", 
                  borderRadius:"20px",
                  boxShadow: "2px 2px 3px #c4cfd4, -2px -2px 3px #fff",
                  borderColor:"#d9dad7"
                }}
                className="card-hover"
              >
                <FacebookIcon
                  sx={{
                    fontSize: 100,
                    color: "#4267B2",
                  }}
                />
              </Box>
            </Grid>
            <Grid item lg={2} sx={{ m: 1 }}>
              <Box
                sx={{
                   display: "flex",
                  justifyContent: "center",
                  background: "#e6f4f9", 
                  borderRadius:"20px",
                  boxShadow: "2px 2px 3px #c4cfd4, -2px -2px 3px #fff",
                  borderColor:"#d9dad7"
                }}
                className="card-hover"
              >
                <GitHubIcon sx={{ fontSize: 100, color: "#967bb6" }} />
              </Box>
            </Grid>
            <Grid item lg={2} sx={{ m: 1 }}>
              <Box
                sx={{
                   display: "flex",
                  justifyContent: "center",
                  background: "#e6f4f9", 
                  borderRadius:"20px",
                  boxShadow: "2px 2px 3px #c4cfd4, -2px -2px 3px #fff",
                  borderColor:"#d9dad7"
                }}
                className="card-hover"
              >
                <LinkedInIcon sx={{ fontSize: 100, color: "#0072b1" }} />
              </Box>
            </Grid>
            <Grid item lg={2} sx={{ m: 1 }}>
              <Box
                sx={{
                   display: "flex",
                  justifyContent: "center",
                  background: "#e6f4f9", 
                  borderRadius:"20px",
                  boxShadow: "2px 2px 3px #c4cfd4, -2px -2px 3px #fff",
                  borderColor:"#d9dad7"
                }}
                className="card-hover"
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
