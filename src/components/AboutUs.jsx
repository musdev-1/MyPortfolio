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
            variant="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
              // fontFamily: "Montserate",
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
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              border: "1px solid lightblue",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
              background: "lightblue",
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
              I am senior web developer .I have 2 years experiance. I have
              expertise in Html5, css3, JS, REactJS, php ,material ui, scss,
              bootstrap, mysql, TailwindCss, AntDesign. My design are fully
              responsive and dynamic in all standard screens.
            </Typography>
          </Box>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item lg={2} sx={{ m: 1 }}>
              <Box
                sx={{
                  background: "#e4f1fe",
                  border: "1px solid #d9dad7",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "8px",
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
                  background: "#e4f1fe",
                  border: "1px solid #d9dad7",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "8px",
                }}
                className="card-hover"
              >
                <GitHubIcon sx={{ fontSize: 100, color: "#967bb6" }} />
              </Box>
            </Grid>
            <Grid item lg={2} sx={{ m: 1 }}>
              <Box
                sx={{
                  background: "#e4f1fe",
                  border: "1px solid #d9dad7",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "8px",
                }}
                className="card-hover"
              >
                <LinkedInIcon sx={{ fontSize: 100, color: "#0072b1" }} />
              </Box>
            </Grid>
            <Grid item lg={2} sx={{ m: 1 }}>
              <Box
                sx={{
                  background: "#e4f1fe",
                  border: "1px solid #d9dad7",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "8px",
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
