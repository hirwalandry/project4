import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/img/pic1.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import Typewriter from "typewriter-effect";
import Container from "../components/container/Container";
import { useStateContext } from "../contexts/ContextProvider";

function Home() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const { setOpenModal, currentColor } = useStateContext();
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: "repeat-x",
        position: "relative",
      }}
      id="home"
    >
      <Box paddingY={{ xs: 0, sm: "4rem", md: "8rem" }}>
        <Container
          display={"flex"}
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
        >
          <Box maxWidth={{ xs: 1, sm: "100%" }} width={{ sm: 1 }}>
            <Typography
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
                // background:
                //   "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
                // backgroundClip: "text",
                // textFillColor: "transparent"
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Turn your vultureing into easiest one!")
                    .start();
                }}
              />
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              theFront will make your product look modern and professional while
              saving you precious time.
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "flex-start" }}
              marginTop={4}
            >
              <Link to="/addbookings" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    marginRight: "5px",
                    textTransform: "none",
                    color: currentColor,
                    borderColor: currentColor,
                    "&:hover": {
                      borderColor: currentColor,
                      boxShadow: "0 12px 15px rgb(140 152 164 / 10%)",
                    },
                  }}
                  color={currentColor}
                  onClick={() => setOpenModal(true)}
                  size="large"
                  variant="outlined"
                  fullWidth={isMd ? false : true}
                >
                  Book now
                </Button>
              </Link>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: "100%", md: "auto" }}
              >
                <Button
                  variant="contained"
                  component="a"
                  sx={{
                    textTransform: "none",
                    color: "white",
                    background: currentColor,
                    "&:hover": {
                      background: currentColor,
                    
                    },
                  }}
                  color={currentColor}
                  target="blank"
                  size="large"
                  fullWidth={isMd ? false : true}
                  // href={"/home"}
                >
                  View pages
                </Button>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box marginX={1}>
              <Box
                component={"img"}
                src={pic1}
                height={1}
                width={1}
                maxWidth={800}
              />
            </Box>
          </Box>
        </Container>
      </Box>
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
  );
}

export default Home;
