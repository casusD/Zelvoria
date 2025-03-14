import { useRef, useState } from "react";
import Button from "../../../layout/button/Button";
import { useModalContext } from "./ModalContext";
import styles from "./ModalVacancy.module.scss";

const ModalVacancy = () => {
  const { setModal, lang } = useModalContext();

  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <>
      <div onClick={() => setModal(false)} className={styles.back}></div>
      <div className={styles.modalVacancy}>
        <h1>{lang == "ru" ? "Форма заявки" : "Application Form"}</h1>
        <form>
          <label className={styles.fullName}>
            {lang == "ru" ? "Личная информация" : "Personal Information"} <br />
            <input
              type="text"
              placeholder={lang == "ru" ? "Полное имя" : "Fullname"}
            />
          </label>
          <div>
            <input
              type="number"
              placeholder={lang == "ru" ? "Номер телефона" : "Phone number"}
            />
            <input
              type="email"
              placeholder={lang == "ru" ? "Почта" : "Email"}
            />
          </div>
          <label className={styles.resume}>
            {lang == "ru" ? "Резюме/портфолио" : "Resume/Portfolio"} <br />
            <span className={styles.resumeText}>{fileName}</span>
            <input
              type="file"
              name="file"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <span className={styles.resumeBtn}>
              {lang == "ru" ? "Выберите файл" : "Select a file"}
            </span>
          </label>
          <label className={styles.coverLetter}>
            {lang == "ru" ? "Сопроводительное письмо" : "Cover Letter"} <br />
            <textarea
              placeholder={
                lang == "ru"
                  ? "Введите свое сообщение..."
                  : "Type your message..."
              }
            ></textarea>
          </label>

          <Button func={() => setModal(false)}>
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {lang == "ru" ? "Отправить" : "Send"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default ModalVacancy;
