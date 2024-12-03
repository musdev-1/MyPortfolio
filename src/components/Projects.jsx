import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Projects = () => {
  const cardProjects = [

    {
      title: "Sky  Angel Game",
      Description: "Project build in Html Css Javascript.Purpose is just to show skills ",
      link: "https://skyangel-game.vercel.app/",
    },
    {
      title: "Password Generator",
      Description: "Project build in React + Vite and Tailwind.I use callback , usememo and useffect hooks.App will generate random password",
      link: "https://password-generator-puce-theta.vercel.app/",
    },
    {
      title: "Todo List",
      Description: "Datasaved in local storage .CRUD operations works.Built in Reactjs and Antd",
      link: "https://todo-app-two-eta-58.vercel.app/",
    },
    {
      title: "Koriander Pizza Dellivery Website ",
      Description: "Build in next js, antd .Data and images provided by client. Deployed on Hostinger",
      link: "https://korriander.vercel.app/",
    },
    {
      title: "Assement",
      Description: "Task for Interview.Build in Html css.Animation task.Deployed on vercel",
      link: "https://assesmentfrontend-sigma.vercel.app/#",
    },
    {
      title: "Verhurun Website",
      Description: "Booking Website like booking.com . Built in nextjs, material ui and scss",
      link: "https://verhuren.vercel.app/",
    },
    {
      title: "Apple Aircart",
      Description: "Aim to provide tools for customer relationship.  Built in nextjs, material ui",
      link: "https://app-dev.airapplecart.co.uk/super-admin",
    },
    {
      title: "Student Help Squad",
      Description: "To guids students in Uk.  Built in nextjs, antd, tailwindcss",
      link: "https://studenthelpsquad.co.uk/",
    },
    {
      title: "AL Meezan AlAhmer",
      Description: "For order shop equipments. Bult in html css php mysql and bootstrap",
      link: "https://almeezanalahmer-trqx.vercel.app/",
    },
    {
      title: "Garments Printing",
      Description: "website designed in Deconetwort Cms",
      link: "https://garmentprinting.com.au/",
    },
    {
      title: "Garments Printing Blog",
      Description: "website designed in wordpress Cms",
      link: "https://garmentprinting.com.au/blog",
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
               minHeight:{lg:'150px',xs:'120px'},
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
