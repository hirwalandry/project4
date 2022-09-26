import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormController from "../components/common/FormController";
import FormModal from "../components/common/FormModal";
import { useStateContext } from "../contexts/ContextProvider";
import { Button, Box } from "@mui/material";

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
  const [errors] = useState({});
  const { currentColor } = useStateContext();

  const onSubmit = async (values) => {};
  const btnstyle = { margin: "8px 0" };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormModal title="Add Bookings" link="/" buttonName="Book now">
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
            sx={{ marginTop: "10px", width: "100%" }}
            fullWidth
            value={formik.values.dropLocation}
            className="form-control"
            errors={
              (formik.touched.email && formik.errors.email) ||
              (formik.touched.email && errors.email)
            }
          />

          <Box sx={{ display: "flex", width: "100%" }}>
            <FormController
              control="select"
              type="text"
              label="Select Vehicle type"
              options={countries}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.initialValues.verhicleType}
              className="form-control"
              fullWidth
              sx={{ marginRight: "10px", width: "98%" }}
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
              fullWidth
              className="form-control"
              errors={
                (formik.touched.email && formik.errors.email) ||
                (formik.touched.email && errors.email)
              }
            />
          </Box>
         
        </form>
      </Box>

      {/* Form */}
    </FormModal>
  );
}

export default AddBookings;
