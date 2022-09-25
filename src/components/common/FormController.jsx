import React from "react";
import Input from "./Input";
import Select from "./Select"

function FormController({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    default:
      return null;
  }
}

export default FormController;
