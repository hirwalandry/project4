import React from "react";
import TextField from "@mui/material/TextField";
import  Box  from '@mui/material/Box';

function Input({ font, label, name, errors, ...rest }) {
  return (
    <Box marginBottom={2}>
      <TextField {...rest} id={name} label={label} name={name} variant="standard" fullWidth/>
      {errors && <Box className="alert alert-warning">{errors}</Box>}
    </Box>
  );
}

export default Input;
