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
              fontFamily: "Montserate",
            }}
          >
            About Us
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
        <Grid item md={4} xs={12}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Montserate", fontWeight: 700, mb: 4 }}
          >
            Shahzeb Rehman Khattak
          </Typography>
          <Box>
            <ul>
              <li
                style={{
                  fontSize: "22px",
                  fontFamily: "Montserate",
                  fontWeight: 500,
                  textAlign: "justify",
                  paddingBottom: "10px",
                }}
              >
                BSCS
              </li>
              <li
                style={{
                  fontSize: "22px",
                  fontFamily: "Montserate",
                  fontWeight: 500,
                  textAlign: "justify",
                  paddingBottom: "10px",
                }}
              >
                3 months Internship at Corramer
              </li>
              <li
                style={{
                  fontSize: "22px",
                  fontFamily: "Montserate",
                  fontWeight: 500,
                  textAlign: "justify",
                  paddingBottom: "10px",
                }}
              >
                9 month working in Solo choicez as Web developer(php)
              </li>
              <li
                style={{
                  fontSize: "22px",
                  fontFamily: "Montserate",
                  fontWeight: 500,
                  textAlign: "justify",
                  paddingBottom: "10px",
                }}
              >
                April 1 from Current working in Orcalo Holding as Front end
                React Developer
              </li>
            </ul>
          </Box>
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
                  lg: "left",
                },
              }}
            >
              I am graduated in 2021 and working as Web developer from
              2020.During the past year I have learned
              Html5,css3,JS,REACT,php,material ui,scss,bootstrap,mysql ,
              TailwindCss,AntDesign.My design are fully responsive in all
              standard screens.
            </Typography>
          </Box>

          <Box>
            <p className="address">
              <span>
                <PermPhoneMsgIcon sx={{ color: "red" }} />
              </span>
              : 03235254333
            </p>
            <p className="address">
              <span>
                <EmailIcon sx={{ color: "red" }} />
              </span>
              : shahzebkhattak703@gmail.com
            </p>
            <p className="address">
              <span>
                <LocationOnIcon sx={{ color: "red" }} />
              </span>
              : Islamabad,Pakistan
            </p>
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={img1}
            alt=""
            style={{ maxWidth: "100%", borderRadius: "16%" }}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <ProgressBar />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
