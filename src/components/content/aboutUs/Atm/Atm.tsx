import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import Navigation from "../../../header/Navigation";
import Button from "../../../layout/button/Button";
import { logos } from "../aboutUsData";
import styles from "./Atm.module.scss";

import { atmData } from "./atnData";
import { useModalContext } from "../../vacancy/modalVacancy/ModalContext";

import termo1 from "./images/termo1.png";
import rectangle from "./images/Rectangle 359.png";

const Atm = () => {
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
                    elem.name === "Zeronto"
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
                background: "linear-gradient(0deg, #E55733, #F5BD33)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Zeronto
            </h1>
            <p>
              <b>Zeronto</b> —{" "}
              {lang === "ru"
                ? "Ваш надёжный партнёр в сфере автоматизации бизнеса. Мы поможем вам оптимизировать рабочие процессы, сократить расходы и повысить эффективность."
                : "your reliable partner in business automation. We will help you optimize your work processes, reduce costs and increase efficiency."}
            </p>
            <Button>
              {lang === "ru" ? "Перейдите на веб-сайт" : "Go to the website"}
            </Button>
          </header>

          <div className={styles.atmGrid}>
            {atmData.map((elem, index) => {
              return (
                <div key={index}>
                  <img src={elem.img} alt="#" />
                  <p>{elem.name[lang]}</p>
                </div>
              );
            })}
          </div>

          <div className={styles.property}>
            <div>
              <h1>
                {lang === "ru"
                  ? "Собственная бумажная фабрика"
                  : "Own Paper Factory"}
              </h1>
              <img src={termo1} alt="#" />
            </div>
            <div>
              <img src={rectangle} alt="#" />
              <p>
                {lang === "ru"
                  ? "Наша компания является первым предприятием в Туркменистане, занимающимся нарезкой высококачественной офисной (формата A3 и A4) и термобумаги для кассовых аппаратов по немецким и итальянским технологиям (Оборудование компаний «BW Paper Systems», «La Mecannica Fumagalli Srl»)."
                  : 'Our company is the first enterprise in Turkmenistan engaged in cutting high-quality office (A3 and A4) and thermal paper for cash registers using German and Italian technologies. (Equipment of the company “BW Paper Systems", “La Mecannica Fumagalli Srl").'}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Atm;
