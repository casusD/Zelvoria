import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import Navigation from "../../header/Navigation";
import styles from "./AboutUs.module.scss";
import { logos } from "./aboutUsData";
import { useModalContext } from "../vacancy/modalVacancy/ModalContext";

const AboutUs = () => {
  const { lang } = useModalContext();

  return (
    <>
      <Navigation logo={true} />
      <section className={styles.aboutUs}>
        <nav>
          {logos.map((elem, index) => {
            return (
              <Link key={index} to={`/${elem.name}`}>
                <div className={styles.logosLink}>
                  <img src={elem.url} alt="#" />
                  <div className={styles.circle}></div>
                </div>
              </Link>
            );
          })}
        </nav>
        <div className={styles.cont}>
          <h1>
            {lang == "ru" ? "Группа компаний" : "Group of Companies"} <hr />
          </h1>

          <span>
            {lang == "ru"
              ? "где мы вместе создаем будущее"
              : "where we create the future together"}
          </span>
          <h5>
            {lang == "ru"
              ? "Мы - группа компаний, активно развивающаяся в нескольких направлениях бизнеса."
              : "We are a group of companies actively developing in several business areas."}
          </h5>
          <img src="src\images\topArrow.png" alt="#" />
          <p>
            {lang == "ru"
              ? "Нажмите на логотип компании, чтобы узнать больше"
              : "Click on the company's logo to learn more"}
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
