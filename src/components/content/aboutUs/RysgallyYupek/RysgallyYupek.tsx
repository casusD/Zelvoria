import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import Navigation from "../../../header/Navigation";
import Button from "../../../layout/button/Button";
import { logos } from "../aboutUsData";
import styles from "./RysgallyYupek.module.scss";

import { yupekData } from "./yupekData";
import { useModalContext } from "../../vacancy/modalVacancy/ModalContext";

const RysgallyYupek = () => {
  const { lang } = useModalContext();

  return (
    <>
      <Navigation logo={true} />
      <section className={styles.yupek}>
        <nav>
          {logos.map((elem, index) => {
            return (
              <Link key={index} to={`/${elem.name}`}>
                <div
                  className={
                    elem.name === "Lunexis"
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

        <div className={styles.yupekCont}>
          <h1
            style={{
              background: "linear-gradient(0deg, #7982B8, #263173)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Lunexis
          </h1>
          <div className={styles.yupekFlex}>
            <header>
              {lang == "ru" ? (
                <p>
                  Туристическая компания <b>Lunexis</b> предлагает индивидуально
                  разработанные туры, ориентированные на глубокое погружение в
                  культуру и незабываемые впечатления. Мы организуем поездки как
                  по внутренним направлениям, так и за рубеж, обеспечивая
                  комфорт и высокое качество обслуживания на каждом этапе.
                </p>
              ) : (
                <p>
                  The travel company <b>Lunexis</b> offers individually designed
                  tours focused on deep cultural immersion and unforgettable
                  experiences. We organize trips both to domestic destinations
                  and abroad, providing comfort and high-quality service at
                  every stage.
                </p>
              )}
              <Button>
                {lang == "ru" ? "Перейдите на веб-сайт" : "Go to the website"}
              </Button>

              <img
                src="src\components\content\aboutUs\RysgallyYupek\img\heartAircraftDecor.png"
                alt="#"
              />
            </header>

            <div className={styles.yupekGrid}>
              {yupekData.map((elem, index) => {
                return (
                  <div key={index}>
                    <img src={elem.img} alt="#" />
                    <p>{elem.name[lang]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RysgallyYupek;
