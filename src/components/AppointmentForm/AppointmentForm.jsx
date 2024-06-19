import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

import {
  BtnForm,
  Form,
  SectionAppointmentForm,
  StyledDatePicker,
  SubTitleAppointmentForm,
  TextArea,
  TitleAppointmentForm,
  TitlesWrapper,
} from "./AppointmentForm.styled";
import customStyles from "./FormCustomStyles";
import { formaSchema } from "../../helpers/validation";
import { options, optionsTime } from "../../helpers/optionsSelect";
import FormField from "./FormField";

const AppointmentForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(formaSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <SectionAppointmentForm className="container">
      <TitlesWrapper>
        <TitleAppointmentForm>
          Wir beraten Sie gerne persönlich!
        </TitleAppointmentForm>
        <SubTitleAppointmentForm>
          Vereinbaren Sie einen Termin mit uns
        </SubTitleAppointmentForm>
      </TitlesWrapper>

      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <FormField
          label="Firma"
          name="firma"
          register={register}
          errors={errors}
          placeholder="Firma"
        />
        <FormField
          label="Anrede"
          name="anrede"
          errors={errors}
          component={
            <Controller
              name="anrede"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  options={options}
                  $errors={!!errors.anrede}
                  styles={customStyles}
                  placeholder="Auswählen"
                  value={options.find((option) => option.value === field.value)}
                  onChange={(selectedOption) =>
                    field.onChange(selectedOption.value)
                  }
                />
              )}
            />
          }
        />
        <FormField
          label="Vorname"
          name="vorname"
          register={register}
          errors={errors}
          required
          placeholder="Vorname"
        />
        <FormField
          label="Nachname"
          name="nachname"
          register={register}
          errors={errors}
          required
          placeholder="Nachname"
        />
        <FormField
          label="E-Mail"
          name="email"
          register={register}
          errors={errors}
          required
          placeholder="E-Mail"
        />
        <FormField
          label="Telefon"
          name="telefon"
          register={register}
          errors={errors}
          required
          placeholder="Telefon"
        />
        <FormField
          label="Ihr Wunschtermin"
          name="wunschtermin"
          errors={errors}
          required
          component={
            <Controller
              name="wunschtermin"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <StyledDatePicker
                  {...field}
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  placeholderText="Datum wählen"
                  dateFormat="dd.MM.yyyy"
                  calendarStartDay={1}
                  formatWeekDay={(day) => day.substr(0, 2)}
                  $errors={!!errors.wunschtermin}
                />
              )}
            />
          }
        />
        <FormField
          label="Gewünschte Zeit"
          name="zeit"
          errors={errors}
          component={
            <Controller
              name="zeit"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  options={optionsTime}
                  styles={customStyles}
                  $errors={!!errors.zeit}
                  placeholder="Nachmittag"
                  value={optionsTime.find(
                    (option) => option.value === field.value
                  )}
                  onChange={(selectedOption) =>
                    field.onChange(selectedOption.value)
                  }
                />
              )}
            />
          }
        />
        <FormField
          label="Nachricht"
          name="nachricht"
          register={register}
          errors={errors}
          placeholder="Thema des Termins"
          component={
            <TextArea
              name="nachricht"
              {...register("nachricht")}
              placeholder="Thema des Termins"
              $errors={!!errors.nachricht}
            />
          }
        />
        <BtnForm type="submit">Absenden</BtnForm>
      </Form>
    </SectionAppointmentForm>
  );
};

export default AppointmentForm;
