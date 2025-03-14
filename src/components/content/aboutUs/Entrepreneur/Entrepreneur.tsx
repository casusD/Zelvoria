import { Link } from "react-router-dom";
import Navigation from "../../../header/Navigation";
import styles from "./Entrepreneur.module.scss";
import { entrepreneurData } from "./entrepreneurData";
import { logos } from "../aboutUsData";
import Button from "../../../layout/button/Button";
import Footer from "../../../footer/Footer";
import { useModalContext } from "../../vacancy/modalVacancy/ModalContext";

const Entrepreneur = () => {
  const { lang } = useModalContext();

  return (
    <>
      <Navigation logo={true} />
      <section className={styles.atm}>
        <nav>
          {logos.map((elem, index) => {
            return (
              <Link key={index} to={`/${elem.name}`}>
                <div
                  className={
                    elem.name === "Xelvora"
                      ? `${styles.logosLink} ${styles.active}`
                      : styles.logosLink
                  }
                >
                  <img src={elem.url} alt="#" />
                  <div className={styles.circle}></div>
                </div>
              </Link>
            );
          })}
        </nav>
        <div className={styles.AtmCont}>
          <header>
            <h1
              style={{
                background: "linear-gradient(0deg, #D02020, #FF8D8D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Xelvora
            </h1>
            <p>
              <b>Xelvora</b> -{" "}
              {lang == "ru"
                ? "Мы специализируемся на продаже высококачественных строительных смесей Henkel и Elif. Мы предлагаем широкий ассортимент продукции для всех видов работ. Наша профессиональная команда поможет вам выбрать лучшие материалы для вашего проекта."
                : "specializes in the sale of high—quality Henkel and Elif brand building mixes. We offer a wide range of products for all types of work. Our professional team will help you choose the best materials for your project."}
            </p>
            <Button>
              {lang == "ru" ? "Перейдите на веб-сайт" : "Go to the website"}
            </Button>
          </header>

          <h2>{lang == "ru" ? "Продукты компании" : "Company Products"}</h2>

          <div className={styles.atmGrid}>
            {entrepreneurData.map((elem, index) => {
              return (
                <div key={index}>
                  <img src={elem.img} alt="#" />
                  <p>{elem.name[lang]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Entrepreneur;
