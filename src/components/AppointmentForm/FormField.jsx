// import React from "react";
// import "react-datepicker/dist/react-datepicker.css";

// import {
//   Input,
//   InputWrapper,
//   Label,
//   TextError,
// } from "./AppointmentForm.styled";
// import Star from "./Star";

// const FormField = ({
//   label,
//   type,
//   name,
//   register,
//   errors,
//   required,
//   placeholder,
//   component,
//   id,
// }) => (
//   <InputWrapper>
//     <Label htmlFor={id}>
//       {label}
//       {required && <Star />}
//     </Label>
//     {component ? (
//       component
//     ) : (
//       <Input
//         type={type}
//         name={name}
//         id={name}
//         {...register(name, { required })}
//         $errors={errors[name]}
//         placeholder={placeholder}
//       />
//     )}
//     <TextError>{errors[name]?.message}</TextError>
//   </InputWrapper>
// );

// export default FormField;

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
  type,
  name,
  register,
  errors,
  required,
  placeholder,
  component,
}) => (
  <InputWrapper>
    <Label htmlFor={name}>
      {label}
      {required && <Star />}
    </Label>
    {component ? (
      component
    ) : (
      <Input
        type={type}
        name={name}
        id={name}
        {...register(name, { required })}
        $errors={errors[name]}
        placeholder={placeholder}
      />
    )}
    <TextError>{errors[name]?.message}</TextError>
  </InputWrapper>
);

export default FormField;
