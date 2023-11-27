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
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            Services
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ padding: "25px" }}>
        {cardService.map((item) => {
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
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#272343",
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
