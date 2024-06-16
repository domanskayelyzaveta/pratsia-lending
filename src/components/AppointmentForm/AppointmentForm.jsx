import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  SectionAppointmentForm,
  SubTitleAppointmentForm,
  TitleAppointmentForm,
  TitlesWrapper,
} from "./AppointmentForm.styled";

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <div>
          <label>Firma</label>
          <input {...register("firma")} placeholder="Firma" />
        </div>
        <div>
          <label>Anrede</label>
          <Controller
            name="anrede"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select {...field} options={options} placeholder="Auswählen" />
            )}
          />
        </div>
        <div>
          <label>Vorname*</label>
          <input
            {...register("vorname", { required: true })}
            placeholder="Vorname"
          />
          {errors.vorname && <span>This field is required</span>}
        </div>
        <div>
          <label>Nachname*</label>
          <input
            {...register("nachname", { required: true })}
            placeholder="Nachname"
          />
          {errors.nachname && <span>This field is required</span>}
        </div>
        <div>
          <label>E-Mail*</label>
          <input
            {...register("email", { required: true })}
            placeholder="E-Mail"
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label>Telefon*</label>
          <input
            {...register("telefon", { required: true })}
            placeholder="Telefon"
          />
          {errors.telefon && <span>This field is required</span>}
        </div>
        <div>
          <label>Ihr Wunschtermin*</label>
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
        </div>
        <div>
          <label>Gewünschte Zeit**</label>
          <input {...register("zeit", { required: true })} type="time" />
          {errors.zeit && <span>This field is required</span>}
        </div>
        <div>
          <label>Nachricht</label>
          <textarea
            {...register("nachricht")}
            placeholder="Thema des Termins"
          />
        </div>
        <button type="submit">Absenden</button>
      </form>
    </SectionAppointmentForm>
  );
};

export default AppointmentForm;
