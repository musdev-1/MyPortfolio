import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Grid container sx={{ padding: "5px" }}>
        <Grid item md={12} xs={12}>
          <Typography
            sx={{
              color: "#272343",
              fontWeight: 600,
              fontSize: "16px",
              textAlign: "CENTER",
            }}
          >
            CopyRight www.shahzebkhattal703@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
