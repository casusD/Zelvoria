import { useScrollContext } from "../content/main/MainPage/ScrollContext";
import { useModalContext } from "../content/vacancy/modalVacancy/ModalContext";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { lang } = useModalContext();
  const { targetRef } = useScrollContext();

  return (
    <footer>
      <div ref={targetRef} className={styles.locationAndLinks}>
        <div className={styles.addres}>
          <h1>
            Group of Companies <br /> Zelvoria
          </h1>
          <p>
            {lang == "ru"
              ? `Кемине,  Здание 24, \n Ашхабад, Туркменистан`
              : `Kemine, \n Building 24, \n Ashgabat, Turkmenistan`}
          </p>
        </div>
        <div className={styles.ourLink}>
          <p>+993 62 68 49 85</p>
          <p>Instagram</p>
          <p>info@zelvoria.group</p>
          <p>LinkedIn</p>
        </div>
      </div>

      <div className={styles.rights}>
        <p>2024</p>
        <p>{lang == "ru" ? "Все права защищены" : "All rights reserved"}</p>
        <p>
          {lang == "ru"
            ? "Конфиденциальность и политика"
            : "Privacy and Policy"}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
