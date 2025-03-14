import { Link } from "react-router-dom";
import Navigation from "../../../header/Navigation";
import styles from "./BoyaDag.module.scss";

import { boyaDagData } from "./boyaDagData";
import { logos } from "../aboutUsData";
import Button from "../../../layout/button/Button";
import Footer from "../../../footer/Footer";
import { useModalContext } from "../../vacancy/modalVacancy/ModalContext";

const BoyaDag = () => {
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
                    elem.name === "Terniq"
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
                background: "linear-gradient(0deg, #FF9D00, #EBAE4D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Terniq
            </h1>
            <p>
              <b>Terniq</b> —{" "}
              {lang == "ru"
                ? "ваш партнёр в нефтехимической и нефтегазовой отраслях. Мы предлагаем инновационные решения для цифровой трансформации предприятий, включая проектирование, строительство и автоматизацию производственных объектов. Наша команда экспертов поможет вам повысить эффективность, сократить расходы и обеспечить устойчивое развитие вашего бизнеса."
                : "your partner in the petrochemical and oil and gas industries. We offer innovative solutions for the digital transformation of enterprises, including design, construction and automation of production facilities. Our expert team will help you increase efficiency, reduce costs and ensure the sustainable development of your business."}
            </p>
            <Button>
              {lang == "ru" ? "Перейдите на веб-сайт" : "Go to the website"}
            </Button>
          </header>

          <div className={styles.atmGrid}>
            {boyaDagData.map((elem, index) => {
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

export default BoyaDag;
