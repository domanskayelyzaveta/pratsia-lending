import { useForm } from "react-hook-form";
import Hero from "../Hero/Hero";
import { StyledForm } from "./Contacts.styled";

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="container" id="contacts">
      <h3>Wir freuen uns über Ihre Nachricht</h3>
      <p>Bei Fragen, zögern Sie nicht, uns zu kontaktieren!</p>
      <ul>
        <li>
          <a href="tel:+4901701481355">+49 (0) 1701481355</a>
        </li>
        <li>
          <a href="tel:+380960976336">+38 (0) 960976336</a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/PU1fPay4NsMiAtSE7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Garnstraße 12, 47798 Krefeld, Deutschland
          </a>
        </li>
        <li>
          <a href="mailto:@pratsia.de">@pratsia.de</a>
        </li>
      </ul>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>
          Vorname
          <input
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
        </label>
        <label>
          Nachname
          <input
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
        </label>
        <label>
          Email
          <input
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
        </label>
        <label>
          Telefon
          <input
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
        </label>
        <label>
          Повідомлення
          <textarea
            name="comment"
            placeholder="Введіть ваше повідомлення"
            {...register("comment", {
              maxLength: {
                value: 500,
                message: "Максимальна кількість 500 символів",
              },
            })}
          ></textarea>
          {errors.comment && <p>{errors.comment.message}</p>}
        </label>
        <button type="submit">Submit</button>
      </StyledForm>
    </section>
  );
};

export default ContactsForm;
