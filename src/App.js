import React, {  useEffect } from "react";
// import { createBrowserHistory } from "history";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { MainComponent } from "./views";
// import appstore from "./assets/img/appstore.png";
// import playstore from "./assets/img/playstore.png";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import SettingsIcon from "@mui/icons-material/Settings";
// import { useStateContext } from "./contexts/ContextProvider";
// import { ThemeSettings } from "./components";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

// import AuthLoading from './views/AuthLoading';
// import { Provider } from "react-redux";
// import { FirebaseProvider, store } from "common";
// import { FirebaseConfig } from './config/FirebaseConfig';
// import { GoogleMapApiConfig } from "./config/GoogleMapApiConfig";
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import { LoginPage, AddBookings } from "./views";
// i18n.use(initReactI18next).init({
//   resources: {},
//   fallbackLng: "en",
//   ns: ["translations"],
//   defaultNS: "translations",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// function loadScript(src, position, id) {
//   if (!position) {
//     return;
//   }

//   const script = document.createElement("script");
//   script.setAttribute("async", "");
//   script.setAttribute("id", id);
//   script.src = src;
//   position.appendChild(script);
// }

// var hist = createBrowserHistory();

function App() {
  // const { openModal, themeSettings, setThemeSettings, currentColor } =
  //   useStateContext();
  // const loaded = useRef(false);
  // if (typeof window !== "undefined" && !loaded.current && !window.google) {
  //   if (!document.querySelector("#google-maps")) {
  //     loadScript(
  //       "https://maps.googleapis.com/maps/api/js?key=" +
  //         GoogleMapApiConfig +
  //         "&libraries=geometry,drawing,places",
  //       document.querySelector("head"),
  //       "google-maps"
  //     );
  //   }
  //   loaded.current = true;
  // }

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
    // <Provider store={store}>
    //   <FirebaseProvider config={FirebaseConfig} appcat={AppCat}>
    //     <AuthLoading>
    <>
      {/* <Box position={"fixed"} left={20} bottom={20} style={{ zIndex: "1000" }}> */}
      {/* <TooltipComponent content="Settings" position="Top"> */}
      {/* <Box
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
      </Box> */}
      {/* {themeSettings && <ThemeSettings />} */}

      {/* <Router>
        <Routes history={hist}>
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
      </Router> */}
      <h1>Hello world</h1>
    </>
  );
}

export default App;
