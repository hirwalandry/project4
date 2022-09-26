import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormController from "../components/common/FormController";
import FormModal from "../components/common/FormModal";
import { useStateContext } from "../contexts/ContextProvider";
import {
  Avatar,
  Checkbox,
  Button,
  Typography,
  Link,
  FormControlLabel,
  TextField,
  Box,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { loginUser } from "../services/authService";

const countries = [
  {
    value: "United States",
  },
  {
    value: "Rwanda",
  },
  {
    value: "Engalnd",
  },
  {
    value: "Japan",
  },
];
//initial values related to input
const initialValues = { email: "", country: "United States" };

//validation Schema related to input
const validationSchema = Yup.object({
  email: Yup.string().required("required"),
  country: Yup.string().required("required"),
});

//submit method when submit form is perfomed

function LoginPage(props) {
  // const { state } = useLocation();
  const [errors] = useState({});
  const { currentColor } = useStateContext();

  const onSubmit = async (values) => {
    // try {
    //   const { data } = await loginUser(values);
    //   localStorage.setItem("token", data.token);
    //   window.location = state ? state.from.pathname : "/";
    // } catch (ex) {
    //   if (ex.response && ex.response.status === 400) {
    //     const error = { ...errors };
    //     if (ex.response.data.message.email) {
    //       error.email = ex.response.data.message.email;
    //     } else if (ex.response.data.message.password) {
    //       error.password = ex.response.data.message.password;
    //     }
    //     setErrors(error);
    //   }
    // }
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormModal title="Sign in" link="/">
      <Box align="center" marginBottom={2}>
        <Avatar style={avatarStyle}>
          <LockOutlinedIcon />
        </Avatar>
      </Box>
      {/* Formik callback method that takes formik as argument and perfom some login on Form componet */}
      <Box marginBottom={2}>
        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* FormController Component takes attribute to specify the specified input */}

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <Button
            type="submit"
            color={currentColor}
            sx={{
              background: currentColor,
              color: "white",
              "&:hover": {
                background: currentColor,
                btnstyle,
                textTransform: "none",
              },
            }}
            variant="contained"
            disabled={!formik.isValid || formik.isSubmitting}
            fullWidth
          >
            Sign in
          </Button>
        </form>
      </Box>
      <Typography>
        <Link href="#">Sign in with OPT</Link>
      </Typography>
      {/* Form */}
    </FormModal>
  );
}

export default LoginPage;
