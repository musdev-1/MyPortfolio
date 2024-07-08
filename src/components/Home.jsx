import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typewriter from "typewriter-effect";
import img1 from "../assets/mebg.png";
import "./style.css";

const name = "Shahzeb Rehman Khattak";
const occupation = "Software Engineer";
const experience = "4 years";

const Banner = () => {
  return (
    <div id="home">
      <Grid 
        container
        spacing={2}
        sx={{  pt: 15, mb: 6 }}
      >
        <Grid item xs={12} md={6} lg={6} xl={6} sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontFamily: 'Montserrat, sans-serif', mt: 2,fontWeight:500 }}>
            Hi I am
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: 'Montserrat, sans-serif', mt: 2, fontWeight:600 }}>
            {name}
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: 'Montserrat, sans-serif', mt: 2,fontWeight:500 }}>
            I am {occupation}
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: 'Montserrat, sans-serif', mt: 2,fontWeight:500 }}>
            with {experience} experience
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: 'Montserrat, sans-serif', mt: 2,fontWeight:500 }}>
            I am good at
          </Typography>

          <Box
            sx={{
              fontSize: "25px",
              fontFamily: 'Montserrat, sans-serif',
              fontWeight:600 ,
            
              mt: 2,
              color: "#e94e5d",
            }}
          >
            <Typewriter
            
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  " Html",
                  " CSS",
                  " Javascript",
                  " Bootstrap",
                  " React JS",
                  " Next JS",
                  " SCSS",
                  " Typescript",
                  " AntD",
                  " TailwindCss",
                  "Media Queries",
                  " Redux",
                  " Recoil",
                  " RTk Query",
                  " Material Ui",
                  " php",
                  " MYSQL",
                ],
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                sx={{
                  borderRadius: "25px",
                  border: "2px solid #626fe6",
                  color: "white",
                  fontWeight: 600,
                  margin: "10px",
                  padding: "8px 20px",
                }}
                className="btn hvr-sweep-to-right"
              >
                <a
                  style={{ color: "#272343", textDecoration: "none", fontFamily: 'Montserrat, sans-serif',
                  fontWeight:600  }}
                  href="/ShahzebCV.pdf"
                  download="ShahzebCV.pdf"
                >
                  Download Resume
                </a>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}
        
        sx={{ display: "flex", justifyContent: "center", padding: "1.5rem" }}
        >
        <Box
            sx={{
              borderRadius: "40% 70% 70% 40% / 50% 30% 70% 70% ",
              background: "lightblue",
              boxShadow: "2px 2px 3px #c4cfd4, -2px -2px 3px #fff",
            }}
          >
            <img src={img1} alt="" style={{ maxWidth: "100%" }} />
          </Box>
         
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
