import { useForm } from "react-hook-form";

import {
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledMainInfoDiv,
  StyledSection,
  StyledTextArea,
  SubmitBtn,
  Subtitle,
  Svg,
  TextError,
  Title,
} from "./Contacts.styled";
import sprite from "../../assets/sprite.svg";
import Star from "./Star";

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Cookies.set("formData", JSON.stringify(data), {
    //   sameSite: "None",
    //   secure: true,
    // });

    console.log("Form Data:", data);
  };

  return (
    <StyledSection className="container" id="contacts">
      <StyledMainInfoDiv>
        <Title>In Kontakt kommen</Title>

        <StyledList>
          <StyledListItem>
            <Subtitle>Call us </Subtitle>
            <p>Bei Fragen, zögern Sie nicht, uns zu kontaktieren!</p>
            <StyledLink href="tel:+4901701481355">
              <Svg>
                <use xlinkHref={`${sprite}#icon-phone`}></use>
              </Svg>
              +49 (0) 1701481355
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href="tel:+380960976336">
              <Svg>
                <use xlinkHref={`${sprite}#icon-phone`}></use>
              </Svg>
              +38 (0) 960976336
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <Subtitle>Visit us </Subtitle>
            <p>Sie können uns unter folgender Adresse finden:</p>
            <StyledLink
              href="https://maps.app.goo.gl/PU1fPay4NsMiAtSE7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Svg>
                <use xlinkHref={`${sprite}#icon-location`}></use>
              </Svg>
              Garnstraße 12, 47798 Krefeld, Deutschland
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <Subtitle>Eine Nachricht schicken</Subtitle>
            <p>Wir freuen uns über Ihre Nachricht</p>
            <StyledLink href="mailto:@pratsia.de">
              <Svg style={{ width: "24px", height: "24px" }}>
                <use xlinkHref={`${sprite}#icon-message`}></use>
              </Svg>
              @pratsia.de
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledMainInfoDiv>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper>
          <StyledLabel>
            Vorname
            <StyledInput
              type="text"
              placeholder="Geben Sie Ihren Vornamen ein"
              {...register("name", {
                required: "Dieses Feld ist obligatorisch",
                pattern: {
                  value:
                    /^(?:\s*[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|\s*[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})\s*$/,
                  message: "Поле повинно містити одне або два слова",
                },
              })}
              error={errors.name}
            />
            {errors.name && (
              <TextError>
                <Star />
                {errors.name.message}
              </TextError>
            )}
          </StyledLabel>
          <StyledLabel>
            Nachname
            <StyledInput
              type="text"
              placeholder="Geben Sie Ihren Nachnamen ein"
              {...register("surname", {
                required: "Dieses Feld ist obligatorisch",
                pattern: {
                  value:
                    /^(?:\s*[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|\s*[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})\s*$/,
                  message: "Поле повинно містити одне або два слова",
                },
              })}
              error={errors.surname}
            />
            {errors.surname && (
              <TextError>
                <Star />
                {errors.surname.message}
              </TextError>
            )}
          </StyledLabel>
        </StyledInputWrapper>

        <StyledInputWrapper>
          <StyledLabel>
            Email
            <StyledInput
              type="text"
              placeholder="mail@pratsia.de"
              {...register("email", {
                required: "Dieses Feld ist obligatorisch",
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Geben Sie eine gültige E-Mail-Adresse ein",
                },
              })}
              error={errors.email}
            />
            {errors.email && (
              <TextError>
                <Star />
                {errors.email.message}
              </TextError>
            )}
          </StyledLabel>

          <StyledLabel>
            Telefon
            <StyledInput
              type="text"
              placeholder="Die Nummer muss mit +49 oder +380 beginnen"
              {...register("number", {
                required: "Dieses Feld ist obligatorisch",
                pattern: {
                  value: /^\+49\d{10}$|^\+380\d{9}$/,
                  message: "Geben Sie eine gültige Telefonnummer ein",
                },
              })}
              error={errors.number}
            />
            {errors.number && (
              <TextError>
                <Star />
                {errors.number.message}
              </TextError>
            )}
          </StyledLabel>
        </StyledInputWrapper>

        <StyledLabel>
          Nachricht
          <StyledTextArea
            name="comment"
            placeholder="Geben Sie Ihre Nachricht ein"
            {...register("comment", {
              maxLength: {
                value: 500,
                message: "Maximale Anzahl von 500 Zeichen",
              },
            })}
            errors={errors.comment}
          ></StyledTextArea>
          {errors.comment && (
            <TextError>
              <Star />
              {errors.comment.message}
            </TextError>
          )}
        </StyledLabel>

        <SubmitBtn type="submit">Absenden</SubmitBtn>
      </StyledForm>

      <div style={{ marginTop: "20px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.2978972306685!2d6.572326616007741!3d51.33326297960765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8b6b4b688b8b3%3A0x4219c3da1e9af58b!2sGarnstra%C3%9Fe%2012%2C%2047798%20Krefeld%2C%20Germany!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
          width="1244"
          height="450"
          style={{ border: 0, filter: "grayscale(30%)" }}
          allowFullScreen=""
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </StyledSection>
  );
};

export default ContactsForm;
