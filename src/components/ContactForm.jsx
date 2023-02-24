import { Button, Card, CardContent, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./style.css";
import React from "react";

const contactInfo = [
  {
    id: "1",
    title: "Email at",
    description: "Gmail",
    link: "shahzebkhattak703@gmail.com",
  },
  {
    id: "2",
    title: "Join me ",
    description: "LinkdIn",
    link: "https://www.linkedin.com/in/shahzeb-rehman-khattak-5723b7219/",
  },
  {
    id: "3",
    title: "Connect with",
    description: "Facebook",
    link: "https://www.facebook.com/",
  },
  {
    id: "4",
    title: "DM ON",
    description: "Whatsapp",
    link: "03235254333",
  },
];

const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [mobile, setMobile] = useState('');

  // const handleName = (event) => {
  //   setName(event.target.value);
  // };
  // const handleEmail = (event) => {
  //   setEmail(event.target.value);
  // };
  // const handleMessage = (event) => {
  //   setMessage(event.target.value);
  // };
  // const handleMobile = (event) => {
  //   setMobile(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(name)
  //   console.log(email)
  //   console.log(message)
  //   console.log(mobile)

  // };

  //   const sendEmail = (event) => {
  // event.preventDefault();
  // console.log('error')
  // emailjs.sendForm('service_nfxn09s','template_yl9eulf',form.current,"jpxpVofbbXtNAYFZM0Nbr").then(res => {
  //   console.log(res);

  // }).catch(err=>
  //   console.log(err));
  //   }

  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", color: "lightgray" }}
          >
            Contact Us
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box className="form">
            <Grid container>
              {contactInfo.map((item, index) => {
                return (
                  <>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                      <Card
                        sx={{
                          background: "black",
                          border: "1px solid red",
                          m: 2,
                        }}
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
                              cursor: "pointer",
                            }}
                          >
                            <a
                              href={item.link}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              {item.description}
                            </a>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
