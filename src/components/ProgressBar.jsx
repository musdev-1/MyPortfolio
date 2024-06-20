import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import react from "../assets/react.png";
import scss from "../assets/scss.png";
import bootstrap from "../assets/boostrap.png";
import next from "../assets/next.png";
import typescript from "../assets/typescript.png";
import mui from "../assets/mui.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import antd from "../assets/antd.jpeg";
import native from "../assets/native.webp";
import wordpress from "../assets/wordpress.jpg";
import deco from "../assets/deco.png";


const ProgressBar = () => {
  const skills = [
    {
      img: html,
      title: "Html",
    },
    { img: css, title: "Css" },
    {
      img: js,
      title: "Javascript",
    },
 
    {
      img: php,

      title: "Php",
    },
    {
      img: wordpress,

      title: "WordPress",
    },
    {
      img: deco,

      title: "DecoNetwork",
    },
    {
      img: mysql,

      title: "MySql",
    },
    {
      img: react,
      title: "ReactJs",
    },
    {
      img: native,

      title: "React Native",
    },
   
   
  
  
    { img: next, title: "NextJs" },
    { img: typescript, title: "Typescript" },
    { img: bootstrap, title: "Bootstrap" },
    { img: mui, title: "Material UI" },
    { img: scss, title: "Scss" },
    {
      img: antd,

      title: "AntD",
    },
    { img: tailwind, title: "Tailwind" },
   
   
  ];

  return (
    <>
      <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 600 }}>
        Skills
      </Typography>
      <Grid container spacing={2} sx={{ padding: "25px" }}>
        {skills.map((item) => {
          return (
            <Grid item md={3} sm={6} xs={6}>
              <Card
                sx={{
                  borderRadius: "20px",
                  boxShadow: "2px 2px 3px #c4cfd4, -2px -2px 3px #fff",
                  borderColor: "#d9dad7",
                }}
              >
                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <img
                    src={item.img}
                    alt={item.title || "image"}
                    style={{ width: "44px", height: "40px" }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      mt: 2,
                      fontWeight: 600,
                      textAlign: "center",
                      fontSize: { md: "24px", xs: "16px" },
                    }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProgressBar;
