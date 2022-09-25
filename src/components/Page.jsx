import React  from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "../theme";
import {useStateContext} from "../contexts/ContextProvider"

function Page({ children }) {
    const { mode } = useStateContext();
// React.useEffect(() => {
//   // Remove the server-side injected CSS.
//   const jssStyles = document.querySelector("#jss-server-side");
//   if (jssStyles) {
//     jssStyles.parentElement.removeChild(jssStyles);
//   }

//   AOS.init({
//     once: true,
//     delay: 0,
//     duration: 800,
//     offset: 0,
//     easing: "ease-in-out",
//   });
// }, []);
    return (
      <ThemeProvider theme={getTheme(mode)}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Paper elevation={0}>{children}</Paper>
      </ThemeProvider>
    );
}

export default Page;
Page.propTypes = {
  children: PropTypes.node.isRequired,
};