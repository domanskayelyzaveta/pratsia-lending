import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

import {
  Block,
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
import Modal from "../Modal/Modal";
import MessageForm from "../Modal/MessageForm/MessageForm";
import { useTranslation } from "react-i18next";
import { CalendarGlobalStyles } from "./StylesDatePicker";

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

const AppointmentForm = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(null);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(formaSchema(t)),
  });

  const onSubmit = (data) => {
    try {
      emailjs.send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, data, VITE_PUBLIC_KEY);
      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setShowModal(true);
    }
  };

  return (
    <SectionAppointmentForm id="kontakt" className="container">
      <TitlesWrapper>
        <TitleAppointmentForm>{t("beraten")}</TitleAppointmentForm>
        <SubTitleAppointmentForm>{t("vereinbaren")}</SubTitleAppointmentForm>
      </TitlesWrapper>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Block>
          <FormField
            label={t("label1")}
            type="text"
            id="firma"
            name="firma"
            register={register}
            errors={errors}
            placeholder={t("placeholder1")}
          />
          <FormField
            label={t("label2")}
            aria-label="Choose an option"
            name="anrede"
            id="anrede"
            errors={errors}
            component={
              <Controller
                name="anrede"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options()}
                    isSearchable={false}
                    $errors={!!errors.anrede}
                    styles={customStyles}
                    placeholder={t("placeholder2")}
                    value={options().find(
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
            label={t("label3")}
            type="text"
            id="vorname"
            name="vorname"
            register={register}
            errors={errors}
            required
            placeholder={t("placeholder3")}
            autocomplete="given-name"
          />
          <FormField
            label={t("label4")}
            type="text"
            id="nachname"
            name="nachname"
            register={register}
            errors={errors}
            required
            placeholder={t("placeholder4")}
          />
          <FormField
            label={t("label5")}
            type="email"
            id="email"
            name="email"
            register={register}
            errors={errors}
            required
            placeholder={t("placeholder5")}
          />
        </Block>
        <Block>
          <FormField
            label={t("label6")}
            type="tel"
            id="telefon"
            name="telefon"
            register={register}
            errors={errors}
            required
            placeholder={t("placeholder6")}
          />
          <FormField
            label={t("label7")}
            id="wunschtermin"
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
                    placeholderText={t("placeholder7")}
                    dateFormat="dd.MM.yyyy"
                    calendarStartDay={1}
                    formatWeekDay={(day) => day.substr(0, 2)}
                    $errors={!!errors.wunschtermin}
                  />
                )}
              />
            }
          />
          <CalendarGlobalStyles />

          <FormField
            label={t("label8")}
            aria-label="Choose an option"
            id="zeit"
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
                    options={optionsTime()}
                    isSearchable={false}
                    styles={customStyles}
                    $errors={!!errors.zeit}
                    placeholder={t("placeholder8")}
                    value={optionsTime().find(
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
            label={t("label9")}
            type="text"
            id="nachricht"
            name="nachricht"
            register={register}
            errors={errors}
            placeholder={t("placeholder9")}
            component={
              <TextArea
                name="nachricht"
                {...register("nachricht")}
                placeholder={t("placeholder9")}
                $errors={!!errors.nachricht}
              />
            }
          />
        </Block>
        <BtnForm type="submit" aria-label="Button absenden">
          {t("absenden")}
        </BtnForm>
      </Form>

      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <MessageForm status={status} />
      </Modal>
    </SectionAppointmentForm>
  );
};

export default AppointmentForm;
