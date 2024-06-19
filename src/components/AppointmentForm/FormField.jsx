import React from "react";
import "react-datepicker/dist/react-datepicker.css";

import {
  Input,
  InputWrapper,
  Label,
  TextError,
} from "./AppointmentForm.styled";
import Star from "./Star";

const FormField = ({
  label,
  name,
  register,
  errors,
  required,
  placeholder,
  component,
}) => (
  <InputWrapper>
    <Label>
      {label}
      {required && <Star />}
    </Label>
    {component ? (
      component
    ) : (
      <Input
        name={name}
        {...register(name, { required })}
        $errors={errors[name]}
        placeholder={placeholder}
      />
    )}
    <TextError>{errors[name]?.message}</TextError>
  </InputWrapper>
);

export default FormField;
