/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "../components/container/Container";

function AboutUs(props) {
  return (
    <Box
      sx={{
        boxShadow: "0 4px 12px -12px gray",
      }}
      id="about"
    >
      <Container>
        <Box>
          <Box
            data-aos={"fade-up"}
          >
            <Typography
              variant="h4"
              color="text.primary"
              marginBottom={5}
              sx={{
                fontWeight: 700,
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h6"
              component="p"
              marginBottom={3}
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              We are the largest mobility platform and one of the world's
              largest online on-demand services provider.
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Manage bookings, request quotes, or book a online service with our
              simple and quick online booking system. We are an on-demand
              services company that allows guests to easily book verious
              services online. We offer the best services in the country.
            </Typography>
          </Box>
        </Box>
      </Container>
      {/* <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box width={1} height={1}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={"h6"}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={"center"}
                >
                  {item.title}
                </Typography>
                <Typography align={"center"} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
}

export default AboutUs;
