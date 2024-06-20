import React from "react";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Grid
        container
        id="footer"
        sx={{
          padding: "2px",
          borderTop: "2px solid #e6f4f9",
       boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
          marginTop: "1rem",
          marginBottom: "0.7rem",
          background:"lightblue"
        }}
      >
        <Grid item md={12} xs={12}>
          <Typography
            sx={{
              color: "#272343",
              fontFamily: 'Montserrat, sans-serif',
                  fontWeight:600 ,
              fontSize: "16px",
              textAlign: "CENTER",
              padding: "0.5rem",
            }}
          >
            Copyright www.shahzebkhattal703@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
