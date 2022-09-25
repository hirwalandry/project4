import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormController from "../components/common/FormController";
import FormModal from "../components/common/FormModal";
import { useStateContext } from "../contexts/ContextProvider";
import {
  Checkbox,
  Button,
  FormControlLabel,
  Box,
} from "@mui/material";

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
const initialValues = {
  pickLocation: "United States",
  dropLocation: "United States",
  verhicleType: "",
  bookNow: "",
};

//validation Schema related to input
const validationSchema = Yup.object({
  email: Yup.string().required("required"),
  country: Yup.string().required("required"),
});

//submit method when submit form is perfomed

function AddBookings(props) {
  // const { state } = useLocation();
  const [errors,] = useState({});
  const { currentColor } = useStateContext();

  const onSubmit = async (values) => {};
  const btnstyle = { margin: "8px 0" };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormModal title="Add Bookings" link="/">
      {/* Formik callback method that takes formik as argument and perfom some login on Form componet */}
      <Box>
        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* FormController Component takes attribute to specify the specified input */}

          <FormController
            control="select"
            type="text"
            label="Select Pickup Country"
            options={countries}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.initialValues.pickLocation}
            className="form-control"
            fullWidth
            errors={
              (formik.touched.email && formik.errors.email) ||
              (formik.touched.email && errors.email)
            }
          />
          <FormController
            control="select"
            type="text"
            label="Select Drop Country"
            options={countries}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            style={{ marginTop: "10" }}
            fullWidth
            value={formik.values.dropLocation}
            className="form-control"
            errors={
              (formik.touched.email && formik.errors.email) ||
              (formik.touched.email && errors.email)
            }
          />

          <Box style={{ display: "flex" }}>
            <FormController
              control="select"
              type="text"
              label="Select Vehicle type"
              options={countries}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.initialValues.verhicleType}
              className="form-control"
              style={{ marginRight: "10px", width: "120px" }}
              errors={
                (formik.touched.email && formik.errors.email) ||
                (formik.touched.email && errors.email)
              }
            />
            <FormController
              control="select"
              type="text"
              label="Book Now"
              options={countries}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.initialValues.bookNow}
              className="form-control"
              style={{ width: "120px" }}
              errors={
                (formik.touched.email && formik.errors.email) ||
                (formik.touched.email && errors.email)
              }
            />
          </Box>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color={currentColor}
            sx={{
              background: currentColor,
              color: "white",
              "&:hover": {
                background: currentColor,
              },
            }}
            variant="contained"
            disabled={!formik.isValid || formik.isSubmitting}
            style={{ btnstyle, textTransform: "none", marginTop: "2px" }}
            fullWidth
          >
            Book now
          </Button>
        </form>
      </Box>

      {/* Form */}
    </FormModal>
  );
}

export default AddBookings;
