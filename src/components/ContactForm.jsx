import { Card, CardContent, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "./style.css";
import React from "react";
import { Email, LinkedIn, PhoneCallback, WhatsApp } from "@mui/icons-material";

const contactInfo = [
  {
    id: "1",
    color: "#B23121",
    icons: <Email />,
    title: "Email",
    description: "shahzebkhattak703@gmail.com",
    link: "shahzebkhattak703@gmail.com",
  },
  {
    id: "2",
    icons: <LinkedIn />,
    color: " #0072b1",
    title: "LinkdIn",
    description: "LinkdIn Profile",
    link: "https://www.linkedin.com/in/shahzeb-rehman-khattak-5723b7219/",
  },
  {
    id: "3",
    icons: <PhoneCallback />,
    color: " #19a7a4",
    title: "Phone",
    description: "+92 03235254333",
  },
  {
    id: "4",
    icons: <WhatsApp />,
    color: " #075e54",
    title: "WhatsApp",
    description: "+92 03235254333",
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
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            Contact Us
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box className="form">
            <Grid container spacing={2} sx={{ padding: "25px" }}>
              {contactInfo.map((item, index) => {
                return (
                  <>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
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
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "5px",
                            }}
                          >
                            <span
                              style={{ color: `${item.color}`, padding: "1px" }}
                            >
                              {item.icons}
                            </span>
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
                          </Box>
                          <a
                            href={item.link}
                            style={{
                              fontSize: {
                                lg: "16px",
                                md: "16px",
                                sm: "16px",
                                xs: "17px",
                              },
                              fontWeight: 600,
                              color: "#272343",
                              display: "flex",
                              justifyContent: "center",
                              cursor: "pointer",
                              textDecoration: "none",
                            }}
                          >
                            {item.description}
                          </a>
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
