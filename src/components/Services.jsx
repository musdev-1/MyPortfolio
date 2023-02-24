import { Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";

const cardService = [
  {
    title: "Responsive Design",
    description:
      " Resize, Hide, Shrink, Enlarge, or move the content to make it look good on any screen",
  },
  {
    title: "Clean Code",
    description:
      "I am writing a code which is more readable and easy to understand by client",
  },
  {
    title: "Optimized Code",
    description:
      "Unwanted code removed make code more shorter use of best libraires & condition statement",
  },
  {
    title: "Best Desgin",
    description:
      "Beautifull  and understanable design which look beautifull and attractive and easy to use",
  },
];

const Services = () => {
  return (
    <>
      <Grid container sx={{ marginTop: "50px" }}>
        <Grid item md={12} xs={12}>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Services
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ padding: "25px" }}>
        {cardService.map((item) => {
          return (
            <Grid item md={3} sm={6} xs={12}>
              <Card
                sx={{ background: "black", border: "1px solid red" }}
                className="card-hover"
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "lightgray",
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "lightgray",
                      textAlign: "center",
                    }}
                  >
                    {item.description}
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

export default Services;
