import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "../theme";
import AOS from "aos";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const [themeSettings, setThemeSettings] = useState(false);
  const [mode, setMode] = useState("light");
  const [currentColor, setCurrentColor] = useState("green");

  // eslint-disable-next-line
  const [mountedComponent, setMountedComponent] = useState(false);

  // const colorMode = (e) => {
  //   useMemo(
  //     () => ({
  //       toggleColorMode: () => {
  //         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  //       },
  //     }),
  //     []
  //   );
  //   themeToggler(e.target.value);

  //   localStorage.setItem("themeMode", e.target.value);
  //   setThemeSettings(false);
  // };

  const colorMode = (mode) => {
    try {
      window.localStorage.setItem("themeMode", mode);
    } catch {
      /* do nothing */
    }

    setMode(mode);
  };

    const themeToggler = () => {
    mode === "light"
      ? colorMode("dark")
      : colorMode("light");
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorsMode", color);
    setThemeSettings(false);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("themeMode");
    // const localColor = window.localStorage.getItem("colorsMode");
    localTheme ? setMode(localTheme) : colorMode("light");
    // localColor ? setColor(localColor) : setCurrentColor("green");

    setMountedComponent(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
useEffect(() => {
  AOS.refresh();
}, [mountedComponent, themeToggler, mode]);
  return (
    <ThemeProvider theme={getTheme(mode, themeToggler)}>
      <StateContext.Provider
        value={{
          openModal,
          setOpenModal,
          themeSettings,
          setThemeSettings,
          mode,
          setMode,
          colorMode,
          currentColor,
          setCurrentColor,
          setColor,
          slideIndex,
          setSlideIndex,
        }}
      >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Paper elevation={0}>{children}</Paper>
      </StateContext.Provider>
    </ThemeProvider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useStateContext = () => useContext(StateContext);
