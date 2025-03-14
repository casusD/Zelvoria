import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import Navigation from "../../../header/Navigation";
import Button from "../../../layout/button/Button";
// import Button from "../../../layout/button/Button";
import { logos } from "../aboutUsData";
import styles from "./Bereket.module.scss";

import { bereketData } from "./bereketData";
import { useModalContext } from "../../vacancy/modalVacancy/ModalContext";

const Bereket = () => {
  const { lang } = useModalContext();

  return (
    <>
      <Navigation logo={true} />
      <section className={styles.bereket}>
        <nav>
          {logos.map((elem, index) => {
            return (
              <Link key={index} to={`/${elem.name}`}>
                <div
                  className={
                    elem.name === "Vexora"
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
        <div className={styles.BereketCont}>
          <header>
            <h1
              style={{
                background: "linear-gradient(0deg, #7982B8, #263173)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Vexora
            </h1>
            <p>
              <b>Vexora</b> —{" "}
              {lang == "ru"
                ? "Ваш надёжный партнёр в сфере автоматизации бизнеса. Мы поможем вам оптимизировать рабочие процессы, сократить расходы и повысить эффективность."
                : "your reliable partner in business automation. We will help you optimize your work processes, reduce costs and increase efficiency."}
            </p>

            <Button>
              {lang == "ru" ? "Перейдите на веб-сайт" : "Go to the website"}
            </Button>
          </header>

          <div className={styles.bereketGrid}>
            {bereketData.map((elem, index) => {
              return (
                <div style={elem.style} key={index}>
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

export default Bereket;
