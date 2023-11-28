import React from "react";
import {Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";

const ProgressBar = () => {
  const backgroundColor = [
    "#f06529",
    "#f0db4f",
    "#61DAFB",
    "#264de4",
    "#cc6699",
    "rgba(234,128,252,1.0)",
    "#5c3f35",
    " #007ACC",
    "#0081CB",
    "#1677ff",
    "#e3342f",
    "#007DBF",
    "#F29111",
  ];

  const option = {
    xAxis: {
      type: "category",
      data: [
        "Html",
        "Javascript",
        "ReactJs",
        "Css",
        "Scss",
        "Bootstrap",
        "NextJs",
        "Typescript",
        "Material UI",
        "AntD",
        "Tailwind",
        "Php",
        "MySql",
      ],
      axisLabel: {
        interval: 0, // Show all labels
        rotate: 45, // Rotate labels for better readability
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: '{value}%', // Display y-axis labels as percentages
      },
    },
    series: [
      {
        data: [
          { value: 99, itemStyle: { color: backgroundColor[0] } },
          { value: 75, itemStyle: { color: backgroundColor[1] } },
          { value: 95, itemStyle: { color: backgroundColor[2] } },
          { value: 99, itemStyle: { color: backgroundColor[3] } },
          { value: 90, itemStyle: { color: backgroundColor[4] } },
          { value: 99, itemStyle: { color: backgroundColor[5] } },
          { value: 80, itemStyle: { color: backgroundColor[6] } },
          { value: 75, itemStyle: { color: backgroundColor[7] } },
          { value: 96, itemStyle: { color: backgroundColor[8] } },
          { value: 93, itemStyle: { color: backgroundColor[9] } },
          { value: 94, itemStyle: { color: backgroundColor[10] } },
          { value: 88, itemStyle: { color: backgroundColor[11] } },
          { value: 92, itemStyle: { color: backgroundColor[12] } },
        ],
        type: "bar",
      },
    ],
  };
  return (
    <>
      <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 600 }}>
        Skills
      </Typography>

      <ReactEcharts
        option={option}
        style={{ height: "500px", width: "100%" }}
      />
    </>
  );
};

export default ProgressBar;
