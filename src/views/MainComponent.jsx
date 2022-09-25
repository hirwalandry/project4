import React from "react";
import {
  Home,
  AboutUs,
  CustomerCare,
  Services,
  ContactUs,
  LandingPage
} from "./";
import { alpha, useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

function MainComponent(props) {
  const theme = useTheme();
  return (
    
    <Box sx={{ overflowX: "hidden" }}>
        <LandingPage bgcolor={"background.paper"}>
      <Home />
      <AboutUs />
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${alpha(
            theme.palette.background.paper,
            0
          )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
          backgroundRepeat: "repeat-x",
          position: "relative",
        }}
      >
        <CustomerCare />
        <Services />
        <Box
          component={"svg"}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: "100%",
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <ContactUs />
      </LandingPage>
      </Box>
  );
}

export default MainComponent;
