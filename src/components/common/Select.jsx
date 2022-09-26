import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function Select({ font, label, name, errors, options, ...rest }) {
  return (
    <Box minWidth={{xs: 90, sm: 200}} marginBottom={2}>
      <TextField
        {...rest}
        id={name}
        label={label}
        name={name}
        variant="standard"
        select
        
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default Select;