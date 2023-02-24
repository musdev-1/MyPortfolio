import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box } from "@mui/material";
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
    title: "React",
    value: 80,
  },
  {
    title: "Html",
    value: 99,
  },
  {
    title: "php",
    value: 80,
  },
  {
    title: "mysql",
    value: 80,
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
    title: "Javascript",
    value: 80,
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
            background: backgroundColor[Math.floor(Math.random() * 6)],
            border:
              "0.5px solid backgroundColor[ Math.floor(Math.random() * 6) ]",
          }}
        >
          <Typography className="progress-value">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

const ProgressBar = () => {
  return (
    <>
      <Box sx={{ width: "100%", padding: "10px", mb: 3 }}>
        {progreeArr.map((item, index) => {
          return (
            <Box sx={{ mt: 4, mb: 5 }}>
              <Typography className="progress-title">{item.title}</Typography>
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
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default ProgressBar;
