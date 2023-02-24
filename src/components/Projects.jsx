import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Projects = () => {
  const cardProjects = [
    {
      title: "School Fee Submission System",
      link: "http/school.com",
    },
    {
      title: "Payroll Management System",
      link: "http/school.com",
    },
    {
      title: "Dummy",
      link: "http/school.com",
    },
    {
      title: "National Savings",
      link: "http/school.com",
    },
  ];

  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography variant="h3" textAlign="center">
            Projects
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: "25px" }}>
        {cardProjects.map((item) => {
          return (
            <Grid item md={3} sm={6} xs={12}>
              <Card
                sx={{ background: "#e4f1fe", border: "1px solid #d9dad7" }}
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
                    }}
                  >
                    {item.link}
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
