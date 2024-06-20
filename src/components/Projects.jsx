import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Projects = () => {
  const cardProjects = [
    {
      title: "Verhurun Website",
      Description: "Booking Website",
      link: "https://verhuren.vercel.app/",
    },
    {
      title: "Apple Aircart",
      Description: "Aim to provide tools for customer relationship",
      link: "https://app-dev.airapplecart.co.uk/super-admin",
    },
    {
      title: "Student Help Squad",
      Description: "To guids students in Uk",
      link: "https://studenthelpsquad.co.uk/",
    },
    {
      title: "AL Meezan AlAhmer",
      Description: "For order shop equipments",
      link: "https://almeezanalahmer-trqx.vercel.app/",
    },
    {
      title: "New Allied Machinery",
      Description: "Selling industry Machines",
      link: "https://alliedwebsite-git-main-shahzebkhattak703-gmailcom.vercel.app/",
    },
  ];

  return (
    <>
      <Grid container id="projects">
        <Grid item md={12} xs={12}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            Projects
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: "25px" }}>
        {cardProjects.map((item) => {
          return (
            <Grid item md={3} sm={6} xs={12}>
              <Card
                sx={{
               
                  borderRadius: "20px",
                  boxShadow: "3px 3px 6px #c4cfd4, -3px -3px 6px #fff",
                 
                  
                }}
                className="card-hover"
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Montserrat, sans-serif',
                  fontWeight:600 ,
                      color: "#272343",
                      textAlign: "center",

                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: 'Montserrat, sans-serif',
                  fontWeight:500 ,
                      color: "#272343",
                      textAlign: "center",
                    }}
                  >
                    {item.Description}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight:500 ,
                      color: "#272343",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <a
                      href={item.link}
                      style={{
                        color: "#626fe6",
                        fontFamily: 'Montserrat, sans-serif',
                  fontWeight:500 ,
                        textDecoration: "none",
                      }}
                    >
                      Click To View
                    </a>
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

export default Projects;
