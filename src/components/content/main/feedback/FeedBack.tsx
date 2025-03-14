import { useNavigate } from "react-router-dom";
import Button from "../../../layout/button/Button";
import { useModalContext } from "../../vacancy/modalVacancy/ModalContext";
import styles from "./Feedback.module.scss";

const Feedback = () => {
  const { lang } = useModalContext();
  const navigate = useNavigate();

  return (
    <section className={styles.feedback}>
      <div className={styles.feedbackInfo}>
        <h3>
          {lang == "ru" ? "Стань одним из нас" : "Be one of us"} <br />
          <span>
            {lang == "ru" ? "Присоединяйтесь к нашей команде" : "Join Our Team"}
          </span>
        </h3>
        <p>
          {lang == "ru"
            ? "Ознакомьтесь с интересными возможностями карьерного роста в нашей группе компаний в разделе Вакансий."
            : "Explore exciting career opportunities in our group of companies in the Vacancies section."}
        </p>
        <Button func={() => navigate("/vacancies")}>
          {lang == "ru" ? "Перейти к разделу Вакансии" : "Go to Vacancies"}
        </Button>
        <p>
          {lang == "ru"
            ? "Не нашли подходящего кандидата, но всё равно хотите присоединиться к нашей команде? Заполните форму и отправьте её. Мы свяжемся с вами как можно скорее!"
            : "Didn’t find the right fit but still want to join our team? Complete the form and submit it. We will contact you at earliest convenience!"}
        </p>
      </div>
      <form>
        <input type="text" placeholder={lang == "ru" ? "Имя" : "Name"} />
        <input type="email" placeholder={lang == "ru" ? "Почта" : "Email"} />
        <input type="number" placeholder={lang == "ru" ? "Номер" : "Number"} />
        <textarea
          name="message"
          id="feedbackMessage"
          placeholder={lang == "ru" ? "Сообщение" : "Message"}
        ></textarea>

        <Button>
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          {lang == "ru" ? "Отправить" : "Send"}
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
        </Button>
      </form>
    </section>
  );
};

export default Feedback;
