/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "../components/container/Container";
import taxCar1 from "../assets/img/taxCar2.jpg";
import taxCar2 from "../assets/img/taxCar3.jpg";
import exclussiveCar1 from "../assets/img/exclusiveCar1.jpg";
import exclussiveCar2 from "../assets/img/exclusiveCar2.jpg";
import comfortCar1 from "../assets/img/comfortCar1.jpg";
import comfortCar2 from "../assets/img/comfortCar2.jpg";
import { ImageList, ImageListItem } from "@mui/material";

const dataSlider = [
  {
    id: 1,
    image: taxCar1,
  },
  {
    id: 2,
    image: taxCar2,
  },
  {
    id: 3,
    image: exclussiveCar1,
  },
  {
    id: 4,
    image: exclussiveCar2,
  },
  {
    id: 5,
    image: comfortCar1,
  },
  {
    id: 6,
    image: comfortCar2,
  },
];
const mock = [
  {
    title: 300,
    subtitle:
      "300 + component compositions, which will help you to build any page easily.",
    suffix: "+",
  },
  {
    title: 45,
    subtitle:
      "45 + landing and supported pages to Build a professional website.",
    suffix: "+",
  },
  {
    title: 99,
    subtitle: "99% of our customers rated 5-star our themes over 5 years.",
    suffix: "%",
  },
];

function CustomerCare(props) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };
  return (
    <Box
      sx={{
        boxShadow: "0 4px 12px -12px gray",
      }}
      id="customer"
    >
      <Container>
        <Box marginTop={8}>
           <Grid
            container
            spacing={4}
            direction={isMd ? "row" : "column-reverse"}
          >
            <Grid item xs={12} md={6}>
              <Box marginBottom={4} data-aos={"fade-up"}>
                <Typography
                  sx={{ fontWeight: 700 }}
                  variant={"h4"}
                  gutterBottom
                >
                  The powerful and flexible car for all kinds of transport
                </Typography>
                <Typography
                  variant={"h6"}
                  component={"p"}
                  color={"text.secondary"}
                >
                  Whether you're creating a subscription service, an on-demand
                  marketplace, an e-commerce store, or a portfolio showcase,
                  theFront helps you create the best possible product for your
                  users.
                </Typography>
              </Box>
              <Grid container spacing={2}> 
                {mock.map((item, i) => (
                  <Grid key={i} item xs={12} md={4} data-aos={"fade-up"}>
                    <Typography variant="h4" color={"primary"} gutterBottom>
                      <VisibilitySensor
                        onChange={(isVisible) =>
                          setViewPortVisibility(isVisible)
                        }
                        delayedCall
                      >
                        <CountUp
                          duration={2}
                          end={viewPortEntered ? item.title : 0}
                          start={0}
                          suffix={item.suffix}
                        />
                      </VisibilitySensor>
                    </Typography>
                    <Typography color="text.secondary" component="p">
                      {item.subtitle}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              xs={12}
              md={6}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Box
                component={Card}
                boxShadow={4}
                height={1}
                width={1}
                data-aos="fade-up"
              >
                <Box
                  component={CardMedia}
                  height={1}
                  width={1}
                  minHeight={300}
                  // image={exclussiveCar1}
                >
                  <ImageList variant="masonry" cols={3} gap={8}>
                    {dataSlider.map((item, index) => (
                      <ImageListItem key={index}>
                        <img
                          src={`${item.image}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.id}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default CustomerCare;
