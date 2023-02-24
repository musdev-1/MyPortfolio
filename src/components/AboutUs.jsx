import React from "react";
import { Grid } from "@mui/material";
import {Box} from "@mui/material";
import { Typography } from "@mui/material";
import img1 from "../assets/img1.jpg";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';


import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 6,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#45A3B6' : '#308fe8',
    },
  }));
  
  const BorderLinearProgressOne = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 6,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#E0EA51' : '#308fe8',
    },
  }));
  const BorderLinearProgressTwo = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 6,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#E55C34' : '#308fe8',
    },
  }));
  const BorderLinearProgressThree = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 6,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#264de4' : '#308fe8',
    },
  }));
  const BorderLinearProgressFour = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 6,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#8993be' : '#308fe8',
    },
  }));
  const BorderLinearProgressFive = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 6,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#34A2E5' : '#308fe8',
    },
  }));
  const BorderLinearProgressSix = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 6,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#851DC5' : '#308fe8',
    },
  }));
  const BorderLinearProgressSeven = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 6,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#C074B6' : '#308fe8',
    },
  }));
  
const AboutUs = () => {

    const [progress, setProgress] = React.useState(5);
    React.useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 90 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
          clearInterval(timer);
        };
      }, []);
      const [progress1, setProgress1] = React.useState(5);
      React.useEffect(() => {
          const timer = setInterval(() => {
            setProgress1((prevProgress) => (prevProgress >= 80 ? 10 : prevProgress + 10));
          }, 800);
          return () => {
            clearInterval(timer);
          };
        }, []);
      const [progress2, setProgress2] = React.useState(5);
      React.useEffect(() => {
          const timer = setInterval(() => {
            setProgress2((prevProgress) => (prevProgress >= 70 ? 10 : prevProgress + 10));
          }, 800);
          return () => {
            clearInterval(timer);
          };
        }, []);
        const [progress3, setProgress3] = React.useState(5);
        React.useEffect(() => {
            const timer = setInterval(() => {
              setProgress3((prevProgress) => (prevProgress >= 85 ? 10 : prevProgress + 10));
            }, 800);
            return () => {
              clearInterval(timer);
            };
          }, []);
        const [progress4, setProgress4] = React.useState(5);
        React.useEffect(() => {
            const timer = setInterval(() => {
              setProgress4((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
            }, 800);
            return () => {
              clearInterval(timer);
            };
          }, []);
        const [progress5, setProgress5] = React.useState(5);
        React.useEffect(() => {
            const timer = setInterval(() => {
              setProgress5((prevProgress) => (prevProgress >= 90 ? 10 : prevProgress + 10));
            }, 800);
            return () => {
              clearInterval(timer);
            };
          }, []);
        const [progress6, setProgress6] = React.useState(5);
        React.useEffect(() => {
            const timer = setInterval(() => {
              setProgress6((prevProgress) => (prevProgress >= 97 ? 10 : prevProgress + 10));
            }, 800);
            return () => {
              clearInterval(timer);
            };
          }, []);
        const [progress7, setProgress7] = React.useState(5);
        React.useEffect(() => {
            const timer = setInterval(() => {
              setProgress7((prevProgress) => (prevProgress >= 99 ? 10 : prevProgress + 10));
            }, 800);
            return () => {
              clearInterval(timer);
            };
          }, []);
      
  return (
    <>
      <Grid container mt={2}>
        <Grid item md={12} xs={12}>
          <Typography
            variant="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Montserate",
            }}
          >
            About Us
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ padding: "25px" ,textAlign:{sm:'center',xs:'center',md:"left"}}}>
        <Grid item md={4} xs={12}>
          <Typography variant="h4" sx={{fontFamily:"Montserate"}}>Shahzeb Rehman Khattak</Typography>
          <Typography sx={{fontFamily:"Montserate",fontWeight:600,textAlign:{sm:'center',xs:'center',md:"left"}}}>
            I am graduated in 2021 and working as Web developer from last one
            year .During the past year i have learned so many thing.I am expert in
            Html5,css3,JS,REACT,php,material ui,scss,bootstrap,mysql.My design
            are fully responsive in all standard screens.
          </Typography>
          <Box>
            <p className="address"><span><PermPhoneMsgIcon sx={{color:"red"}}/></span>:  03235254333</p>
            <p className="address"><span><EmailIcon sx={{color:"red"}}/></span>:  shahzebkhattak703@gmail.com</p>
            <p className="address"><span><LocationOnIcon sx={{color:"red"}}/></span>:  Islamabad,Pakistan</p>
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img src={img1} alt="" style={{maxWidth:"100%"}}/>
        </Grid>
        <Grid item md={4} xs={12}>
        <label className="progress-label">React Js</label>

        <BorderLinearProgress variant="determinate" value={progress} />
        <label className="progress-label">JavaScript</label>

<BorderLinearProgressOne variant="determinate" value={progress1} />

<label className="progress-label">Html</label>

<BorderLinearProgressTwo variant="determinate" value={progress2} />
<label className="progress-label">CSS</label>

<BorderLinearProgressThree variant="determinate" value={progress3} />
<label className="progress-label">PHP</label>

<BorderLinearProgressFour variant="determinate" value={progress4} />
<label className="progress-label">Material UI</label>

<BorderLinearProgressFive variant="determinate" value={progress5} />
<label className="progress-label">Bootstrap</label>

<BorderLinearProgressSix variant="determinate" value={progress6} />
<label className="progress-label">SCSS</label>

<BorderLinearProgressSeven variant="determinate" value={progress7} />
      
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
