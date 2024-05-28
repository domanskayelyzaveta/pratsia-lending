import { useForm } from "react-hook-form";
// import Hero from "../Hero/Hero";
import {
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledMainInfoDiv,
  StyledTextArea,
  SubmitBtn,
  Subtitle,
  Svg,
  Title,
} from "./Contacts.styled";
import sprite from "../../assets/sprite.svg";

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Cookies.set("formData", JSON.stringify(data), {
      sameSite: "None",
      secure: true,
    });

    console.log("Form Data:", data);
  };

  return (
    <section
      className="container"
      id="contacts"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingTop: "20px",
        gap: "60px",
      }}
    >
      <StyledMainInfoDiv>
        <Title>In Kontakt kommen</Title>

        <StyledList>
          <StyledListItem>
            <Subtitle>Call us </Subtitle>
            <p>Bei Fragen, zögern Sie nicht, uns zu kontaktieren!</p>
            <StyledLink href="tel:+4901701481355">
              <Svg>
                <use href={`${sprite}#icon-phone`}></use>
              </Svg>
              +49 (0) 1701481355
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href="tel:+380960976336">
              <Svg>
                <use href={`${sprite}#icon-phone`}></use>
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
                <use href={`${sprite}#icon-location`}></use>
              </Svg>
              Garnstraße 12, 47798 Krefeld, Deutschland
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <Subtitle>Eine Nachricht schicken</Subtitle>
            <p>Wir freuen uns über Ihre Nachricht</p>
            <StyledLink href="mailto:@pratsia.de">
              <Svg style={{ width: "24px", height: "24px" }}>
                <use href={`${sprite}#icon-message`}></use>
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
              placeholder="Введіть своє ім’я"
              {...register("name", {
                required: "Це поле обов'язкове для заповнення",
                pattern: {
                  value:
                    /^(?:\s*[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|\s*[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})\s*$/,
                  message: "Поле повинно містити одне або два слова",
                },
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </StyledLabel>
          <StyledLabel>
            Nachname
            <StyledInput
              type="text"
              placeholder="Введіть Nachname"
              {...register("surname", {
                required: "Це поле обов'язкове для заповнення",
                pattern: {
                  value:
                    /^(?:\s*[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|\s*[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})\s*$/,
                  message: "Поле повинно містити одне або два слова",
                },
              })}
            />
            {errors.surname && <p>{errors.surname.message}</p>}
          </StyledLabel>
        </StyledInputWrapper>

        <StyledInputWrapper>
          <StyledLabel>
            Email
            <StyledInput
              type="text"
              placeholder="Введіть Email"
              {...register("email", {
                required: "Це поле обов'язкове для заповнення",
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Введіть коректний емейл",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </StyledLabel>
          <StyledLabel>
            Telefon
            <StyledInput
              type="text"
              placeholder="Введіть nummer"
              mask="+38(099)999-99-99"
              {...register("nummer", {
                required: "Це поле обов'язкове для заповнення",
                pattern: {
                  value: /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
                  message: "Введіть коректний номер телефона",
                },
              })}
            />
            {errors.nummer && <p>{errors.nummer.message}</p>}
          </StyledLabel>
        </StyledInputWrapper>

        <StyledLabel>
          Повідомлення
          <StyledTextArea
            name="comment"
            placeholder="Введіть ваше повідомлення"
            {...register("comment", {
              maxLength: {
                value: 500,
                message: "Максимальна кількість 500 символів",
              },
            })}
          ></StyledTextArea>
          {errors.comment && <p>{errors.comment.message}</p>}
        </StyledLabel>

        <SubmitBtn type="submit">Submit</SubmitBtn>
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
    </section>
  );
};

export default ContactsForm;
