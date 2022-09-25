import React from "react";
import { Box, Typography } from "@mui/material";
import mobilephoto from "../assets/img/triobanner.png";
import appstore from "../assets/img/appstore.png";
import playstore from "../assets/img/playstore.png";
import Container from "../components/container/Container";

function MobileApp(props) {
  return (
    <Box
      sx={{
        boxShadow: "0 4px 12px -12px gray",
      }}
    >
      <Container>
        <Box
          marginTop={8}
          marginBottom={8}
          paddingLeft={{ sm: "40px", xs: "20px" }}
          paddingRight={{ xs: "20px" }}
        >
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
              Mobile Apps available on App Stores
            </Typography>
          </Box>
        </Box>
        <Box
          item
          container
          marginBottom={6}
          justifyContent="center"
          alignItems="center"
          xs={12}
          data-aos={"fade-up"}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box component={"img"} style={{ width: "40%" }} src={mobilephoto} />
        </Box>
        <Box
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box component={"img"} style={{ width: "10%" }} src={appstore} />
          <Box component={"img"} style={{ width: "12%" }} src={playstore} />
        </Box>
      </Container>
    </Box>
  );
}

export default MobileApp;
