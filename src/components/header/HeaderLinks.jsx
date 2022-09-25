import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { useStateContext } from "../../contexts/ContextProvider";

function HeaderLinks({ fontWeight, icons, title, href, colorInvert = false }) {
  const { mode } = useStateContext();
  const styles = {
    nav: {
      a: {
        fontSize: "20px",
        fontWeight: "body",
        marginRight: "10px",
        cursor: "pointer",
        lineHeight: "1.2",
        transition: "all 0.15s",
        color: `${mode === "light" ? "black" : "#fff"}`,
        "&:hover": {
          color: "#00FFFF",
        },
        "&.active": {
          color: "#00FFFF",
        },
      },
    },
  };
  return (
    <Box
      as="nav"
      sx={styles.nav}
      // style={{
      //   textDecoration: "none",
      //   cursor: "pointer",
      //   fontSize: "20px",
      //   marginRight: "10px",
      //   display: "inline-block",
      //   color: `${mode === "light" ? "black" : "white"}`,
      //   "&:hover": {
      //     fontWeight: 700,
      //   },
      //   "&.active": {
      //     fontWeight: 700,
      //     color: "red",
      //   },
      // }}
    >
      <Link
        activeClass="active"
        to={href}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {title}
      </Link>

      {/* <Popover
        elevation={3}
        id={id}
        open={openedPopoverId === id}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          ".MuiPaper-root": {
            maxWidth: items.length > 12 ? 350 : 250,
            padding: 2,
            marginTop: 2,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderTop: `3px solid ${theme.palette.primary.main}`,
          },
        }}
      >
        <Grid container spacing={0.5}>
          {items.map((p, i) => (
            <Grid item key={i} xs={items.length > 12 ? 6 : 12}>
              <Button
                component={"a"}
                href={p.href}
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  color:
                    activeLink === p.href
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  backgroundColor:
                    activeLink === p.href
                      ? alpha(theme.palette.primary.main, 0.1)
                      : "transparent",
                  fontWeight: activeLink === p.href ? 600 : 400,
                }}
              >
                {p.title}
                {p.isNew && (
                  <Box
                    padding={0.5}
                    display={"inline-flex"}
                    borderRadius={1}
                    bgcolor={"primary.main"}
                    marginLeft={2}
                  >
                    <Typography
                      variant={"caption"}
                      sx={{ color: "common.white", lineHeight: 1 }}
                    >
                      new
                    </Typography>
                  </Box>
                )}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Popover> */}
    </Box>
  );
}

HeaderLinks.propTypes = {
  title: PropTypes.string.isRequired,
  colorInvert: PropTypes.bool,
};

export default HeaderLinks;
