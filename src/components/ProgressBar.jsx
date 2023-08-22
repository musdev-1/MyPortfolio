import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, Grid } from "@mui/material";
import { Typography } from "antd";

const backgroundColor = [
  "#1890FF",
  "#4DB5AB",
  "#C5A8FF",
  "#FF8F0D",
  "#FA5A7D",
  "#3DA0E4",
  "#FCB81B",
];

const progreeArr = [
 
  {
    title: "Html",
    value: 99,
  },
  {
    title: "Javascript",
    value: 80,
  },
  {
    title: "React",
    value: 90,
  },
  {
    title: "TypeScript",
    value: 90,
  },
  {
    title: "Next.Js",
    value: 90,
  },
  {
    title: "Css",
    value: 99,
  },

  {
    title: "SCSS",
    value: 95,
  },
 
  {
    title: "Material UI",
    value: 95,
  },
  {
    title: "Tailwind",
    value: 95,
  },
  {
    title: "Ant Design",
    value: 95,
  },
  {
    title: "Bootstrap",
    value: 95,
  },
  {
    title: "php",
    value: 80,
  },
  {
    title: "mysql",
    value: 80,
  },
];

function LinearProgressWithLabel(props) {
  return (
    <Box className="catergories">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box
          className="progress-box"
          sx={{
            padding: "5px",
            borderRadius: "8px",
            background: backgroundColor[Math.floor(Math.random() * 6)],
            border:
              "0.5px solid backgroundColor[ Math.floor(Math.random() * 6) ]",
          }}
        >
          <Typography
            className="progress-value"
            sx={{
              color: "white",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

const ProgressBar = () => { 
  return (
    <>
      
      <Grid columnSpacing={5} rowSpacing={2} container sx={{ width: "100%", padding: "10px"}}>
        {progreeArr.map((item, index) => {
          return (
            <Grid item lg={6} xs={12}>
              <Typography className="progress-title" style={{fontWeight:600}}>{item.title}</Typography>
              <LinearProgressWithLabel
                sx={{
                  padding: "3px",
                  borderRadius: "6px",
                  background: "#D9DBE9",
                  "& .MuiLinearProgress-bar1Determinate": {
                    backgroundColor: backgroundColor[index % 6],
                  },
                }}
                value={item.value}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProgressBar;
