import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logo from "../../assets/img/logo138x75black.png";
import { useStateContext } from "../../contexts/ContextProvider";

import HeaderLinks from "../header/HeaderLinks";

function SidebarNav({ onClose, pages }) {
  const { currentColor, setOpenModal } = useStateContext();

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={"flex"}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box component={"img"} src={logo} height={1} width={1} />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <Box>
            {pages.map((p, i) => (
              <Box marginTop={1}>
                <HeaderLinks
                  onClose={onClose}
                  title={p.title}
                  href={p.href}
                  icons={p.icons}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box marginTop={2}>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button
              size={"large"}
              variant="outlined"
              color={currentColor}
              sx={{ textTransform: "none" }}
              onClick={() => setOpenModal(true)}
            >
              Sign in
            </Button>
          </Link>
        </Box>
        <Box marginTop={1}>
          <Button
            size={"large"}
            variant="contained"
            color={currentColor}
            sx={{
              background: currentColor,
              color: "white",
              "&:hover": {
                background: currentColor,
              },
            }}
            style={{ textTransform: "none" }}
            component="a"
            target="blank"
            href={"#"}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SidebarNav;
