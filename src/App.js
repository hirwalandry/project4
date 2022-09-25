import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainComponent } from "./views";
import appstore from "./assets/img/appstore.png";
import playstore from "./assets/img/playstore.png";
import { Box, IconButton, Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useStateContext } from "./contexts/ContextProvider";
import { ThemeSettings } from "./components";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { LoginPage, AddBookings } from "./views";

function App() {
  const { openModal, themeSettings, setThemeSettings, currentColor } =
    useStateContext();

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Box position={"fixed"} left={20} bottom={20} style={{ zIndex: "1000" }}>
        <Box
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box component={"img"} style={{ width: "30%" }} src={appstore} />
          <Box component={"img"} style={{ width: "35%" }} src={playstore} />
        </Box>
      </Box>
      <Box position={"fixed"} right={10} bottom={20} style={{ zIndex: "1000" }}>
        <Tooltip title="Setting" placement="top" arrow>
          <IconButton
            sx={{
              marginRight: "5px",
              textTransform: "none",
              background: currentColor,
              // color: currentColor,
              // borderColor: currentColor,
              "&:hover": {
                background: currentColor,
                boxShadow: "0 12px 15px rgb(140 152 164 / 10%)",
              },
            }}
            onClick={() => setThemeSettings(true)}
          >
            <SettingsIcon style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      </Box>
      {themeSettings && <ThemeSettings />}
      <Router>
        <Routes>
          <Route path="/" element={<MainComponent />}>
            <Route path="signin" element={<LoginPage />} />
            <Route path="addbookings" element={<AddBookings />} />
          </Route>
        </Routes>
        {openModal ? (
          <Routes>
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/addbookings" element={<AddBookings />} />
          </Routes>
        ) : null}
      </Router>
    </>
  );
}

export default App;
