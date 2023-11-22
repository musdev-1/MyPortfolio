import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Projects = () => {
  const cardProjects = [
    {
      title: "Booking Website Verhurun",
      link: "https://verhuren.vercel.app/",
    },
    {
      title: "Payroll Management System",
      link: "http/school.com",
    },
    {
      title: "Student Help Squad",
      link: "https://studenthelpsquad.co.uk/",
    },
    {
      title: "AL Meezan AlAhmer",
      link: "https://almeezanalahmer-trqx.vercel.app/",
    },
  ];

  return (
    <>
      <Grid container>
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
                  background: "#e6f4f9",
                  borderRadius: "20px",
                  boxShadow: "3px 3px 6px #c4cfd4, -3px -3px 6px #fff",
                  borderColor: "#d1d9e6",
                }}
                className="card-hover"
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#272343",
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#272343",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <a
                      href={item.link}
                      style={{ color: "#272343", fontWeight: 600 }}
                    >
                      {item.link}
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
