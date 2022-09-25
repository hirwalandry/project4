import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "../components/container/Container";


function Services(props) {
  const theme = useTheme();
  const mock = [
    {
      title: "Comfortable",
      subtitle:
        "You experience is important to us. We never compromise on our standards. Safety regulations are particularly emphasized to ensure peace of mind.",
      icon: (
        <svg
          height={24}
          width={24}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Convenient",
      subtitle:
        "View live tracking, price estimations, and even book ahead of time! We have every avenue covered with every latest technology",
      icon: (
        <svg
          height={24}
          width={24}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Secure",
      subtitle:
        "Aside from cash, credit card, payments are PCI DSS compliant. The website has an SSL certification, and the apps are checked by the Apple Store and Google Play.",
      icon: (
        <svg
          height={24}
          width={24}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];
  return (
    <Box id="services">
      <Container>
        <Box marginTop={8}>
          <Box data-aos={"fade-up"}>
            <Typography
              data-aos={"fade-up"}
              variant="h4"
              color="text.primary"
              align={"center"}
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Service Information
            </Typography>
            <Typography
              data-aos={"fade-up"}
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
              align={"center"}
            >
              We provide the best App based services in the country.
            </Typography>
          </Box>
          <Grid container spacing={4} marginTop={4}>
            {mock.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box
                  component={Card}
                  padding={4}
                  borderRadius={2}
                  width={1}
                  height={1}
                  data-aos={"fade-up"}
                  data-aos-delay={i * 100}
                >
                  <Box display={"flex"} flexDirection={"column"}>
                    <Box
                      component={Avatar}
                      width={50}
                      height={50}
                      marginBottom={2}
                      bgcolor={theme.palette.primary.main}
                      color={theme.palette.background.paper}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant={"h6"}
                      gutterBottom
                      sx={{ fontWeight: 500 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
