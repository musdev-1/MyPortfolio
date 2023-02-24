import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typewriter from "typewriter-effect";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./style.css";

const name = "Shahzeb Rehman Khattak";
const occupation = " Frontend webdeveloper";
const experience = "2 years";

const Banner = () => {
  return (
    <>
      <Grid container className="home-container">
        <Grid
          item
          xs={12}
          md={12}
          sx={{ textAlign: "center", marginTop: "200px" }}
        >
          <Typography variant="h5" sx={{ fontFamily: "Montserate", mt: 2 }}>
            Hi I am
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "Montserate", mt: 2 }}>
            {name}
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: "Montserate", mt: 2 }}>
            I am {occupation}.{" "}
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: "Montserate", mt: 2 }}>
            with {experience} experience
          </Typography>

          <Box sx={{ fontSize: "25px", fontFamily: "Montserate", mt: 2 }}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "I am good at Html",
                  "I am good at CSS",
                  "I am good at Javascript",
                  "I am good at Bootstrap",
                  "I am good at React",
                  "I am good at php",
                  "I am good at Material Ui",
                  "I am good at SCSS",
                  "I am good at MYSQL",
                ],
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                sx={{
                  borderRadius: "25px",
                  border: "2px solid white",
                  color: "white",
                  fontWeight: 600,
                  margin: "10px",
                  padding: "8px 20px",
                }}
                className="btn"
              >
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="./ShahzebCV.pdf"
                  download
                >
                  Download Resume
                </a>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}></Grid>
      </Grid>
    </>
  );
};

export default Banner;
