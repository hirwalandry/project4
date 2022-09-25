import React, { useState } from "react";
import {
  Box,
  Drawer,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  Tooltip,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { themeColors } from "./WebTheme";
import { useStateContext } from "../../contexts/ContextProvider";
import FormController from "../common/FormController";

const languages = [
  { id: "1", value: "United States" },
  { id: "2", value: "Kinyarwanda" },
  { id: "3", value: "French" },
];
function ThemeSettings() {
  const { themeSettings, setThemeSettings, mode, colorMode, setColor } =
    useStateContext();
  const [language, setLanguage] = useState("United States");
  const handleChange = ({ currentTaget: Input }) => {
    const countryLanguage = { ...languages };
    countryLanguage[Input.name] = Input.value;
    setLanguage(countryLanguage);
  };
  return (
    <Drawer
      anchor="right"
      onClose={() => setThemeSettings(false)}
      open={themeSettings}
      variant="temporary"
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: 280,
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          padding: 1,
        }}
      >
        <Box>
          <Box width={1} paddingX={2} paddingY={1}></Box>
          <Box paddingX={2} paddingY={2}>
            <Box>
              <Typography component="p">Theme Option</Typography>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="light"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="light"
                  name="theme"
                  onChange={colorMode.toggleColorMode}
                  checked={mode === "light"}
                  control={<Radio />}
                  label="Light"
                />
                <FormControlLabel
                  value="dark"
                  name="theme"
                  onChange={colorMode.toggleColorMode}
                  checked={mode === "dark"}
                  control={<Radio />}
                  label="Dark"
                />
              </RadioGroup>
            </Box>
          </Box>
          <Box paddingX={2} paddingY={2}>
            <Typography component="p">Theme Option</Typography>
            <Box display={"flex"} style={{ gap: "3px" }}>
              {themeColors.map((item, index) => (
                <Tooltip key={index} title={item.name} placement="top" arrow>
                  <Box
                    position={"relative"}
                    marginTop={"10px"}
                    sx={{ gap: "5px" }}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <IconButton
                      onClick={() => setColor(item.color)}
                      sx={{
                        marginRight: "5px",
                        textTransform: "none",
                        background: item.color,
                        // color: currentColor,
                        // borderColor: currentColor,
                        "&:hover": {
                          background: item.color,
                          boxShadow: "0 12px 15px rgb(140 152 164 / 10%)",
                        },
                      }}
                    >
                      <DoneIcon fontSize={"2px"} style={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Tooltip>
              ))}
            </Box>
          </Box>
          <Box paddingX={2} paddingY={2}>
            <Typography component="p">Language Option</Typography>
            <Box marginTop={"5px"}>
              <FormController
                control="select"
                type="select"
                options={languages}
                onChange={handleChange}
                value={language}
                className="form-control"
                fullWidth
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

export default ThemeSettings;
