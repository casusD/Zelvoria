import { Link } from "react-router-dom";
import Navigation from "../../../header/Navigation";
import styles from "./TurkmenToleg.module.scss";

import { turkmenTolegData } from "./turkmenTolegData";
import { logos } from "../aboutUsData";
import Button from "../../../layout/button/Button";
import Footer from "../../../footer/Footer";
import { useModalContext } from "../../vacancy/modalVacancy/ModalContext";

const TurkmenToleg = () => {
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
                    elem.name === "Brizora"
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
                background: "linear-gradient(0deg, #439A4A, #7CFF6B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Brizora
            </h1>
            <p>
              <b>Brizora</b> —{" "}
              {lang == "ru"
                ? "IT-специалисты для банков и платёжных систем. Наша команда высококвалифицированных специалистов создаёт инновационные решения, обеспечивающие стабильный рост и развитие наших клиентов."
                : "IT experts for banks and payment systems. Our team is highly qualified specialists create innovative solutions, ensuring a stable the growth and development of our clients."}
            </p>
            <Button>
              {lang == "ru" ? "Перейдите на веб-сайт" : "Go to the website"}
            </Button>
          </header>

          <div className={styles.atmGrid}>
            {turkmenTolegData.map((elem, index) => {
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

export default TurkmenToleg;
