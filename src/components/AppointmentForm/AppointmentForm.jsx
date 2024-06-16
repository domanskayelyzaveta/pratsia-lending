import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Form,
  Input,
  InputWrapper,
  Label,
  SectionAppointmentForm,
  SubTitleAppointmentForm,
  TitleAppointmentForm,
  TitlesWrapper,
} from "./AppointmentForm.styled";
import customStyles from "./FormCustomStyles";
import Star from "./Star";

const AppointmentForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const options = [
    { value: "Herr", label: "Herr" },
    { value: "Frau", label: "Frau" },
  ];

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
        <InputWrapper>
          <Label>Firma</Label>
          <Input {...register("firma")} placeholder="Firma" />
        </InputWrapper>
        <InputWrapper>
          <Label>Anrede</Label>
          <Controller
            name="anrede"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                options={options}
                styles={customStyles}
                placeholder="Auswählen"
              />
            )}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>
            Vorname
            <Star />
          </Label>

          <Input
            {...register("vorname", { required: true })}
            placeholder="Vorname"
          />
          {errors.vorname && <span>This field is required</span>}
        </InputWrapper>
        <InputWrapper>
          <Label>
            Nachname <Star />
          </Label>

          <Input
            {...register("nachname", { required: true })}
            placeholder="Nachname"
          />
          {errors.nachname && <span>This field is required</span>}
        </InputWrapper>
        <InputWrapper>
          <Label>
            E-Mail
            <Star />
          </Label>
          <Input
            {...register("email", { required: true })}
            placeholder="E-Mail"
          />
          {errors.email && <span>This field is required</span>}
        </InputWrapper>
        <InputWrapper>
          <Label>
            Telefon
            <Star />
          </Label>

          <Input
            {...register("telefon", { required: true })}
            placeholder="Telefon"
          />
          {errors.telefon && <span>This field is required</span>}
        </InputWrapper>
        <InputWrapper>
          <Label>
            Ihr Wunschtermin
            <Star />
          </Label>

          <Controller
            name="wunschtermin"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <DatePicker
                {...field}
                placeholderText="Datum wählen"
                dateFormat="dd.MM.yyyy"
              />
            )}
          />
          {errors.wunschtermin && <span>This field is required</span>}
        </InputWrapper>
        <InputWrapper>
          <Label>
            Gewünschte Zeit
            <Star />
          </Label>

          <Input {...register("zeit", { required: true })} type="time" />
          {errors.zeit && <span>This field is required</span>}
        </InputWrapper>
        <InputWrapper>
          <Label>Nachricht</Label>
          <textarea
            {...register("nachricht")}
            placeholder="Thema des Termins"
          />
        </InputWrapper>
        <button type="submit">Absenden</button>
      </Form>
    </SectionAppointmentForm>
  );
};

export default AppointmentForm;
