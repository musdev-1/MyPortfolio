import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import img1 from "../assets/img1.jpg";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
          md={6}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={img1}
            alt=""
            style={{ maxWidth: "100%", borderRadius: "16%", height: "500px" }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
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
