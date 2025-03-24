import { useEffect, useRef, useState } from "react";
import Button from "../../../layout/button/Button";
import styles from "./MainPage.module.scss";
import { useInnovativeSolutionsIteration } from "../../../../hooks/useInnovativeSolutionsIteration";
import Footer from "../../../footer/Footer";
import Companies from "../companies/Companies";
import Feedback from "../feedback/FeedBack";
import OurPartners from "../ourPartners/OurPartners";
import OurProjects from "../ourProjects/OurProjects";
import Navigation from "../../../header/Navigation";
import {
  LangType,
  useModalContext,
} from "../../vacancy/modalVacancy/ModalContext";

import bg3 from "../../../../images/BG 3.png";
import bg4 from "../../../../images/BG 4.png";

const InnovativeSolutions: Record<LangType, string[]> = {
  en: ["Automation", "IT", "Tourism", "Business", "Logistics", "Transport"],
  ru: ["Автоматизации", "ИТ", "Туризме", "Бизнесе", "Логистике", "Транспорте"],
};

const MainPage = () => {
  const [firstAnimPlay, setFirstAnimPlay] = useState(true);
  const [secondAnimPlay, setSecondAnimPlay] = useState(true);
  const [thirdAnimPlay, setThirdAnimPlay] = useState(true);

  const { lang } = useModalContext();

  const companyRef = useRef<HTMLDivElement>(null);

  const scrollToTarget = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const innovativeSolution = useInnovativeSolutionsIteration(
    InnovativeSolutions[lang]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstAnimPlay((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondAnimPlay((prev) => !prev);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setThirdAnimPlay((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navigation logo={true}>
        {lang == "ru" ? "Проекты" : "Projects"}
      </Navigation>
      <section className={styles.main}>
        <div className={styles.mainInfo}>
          <h1>
            {lang == "ru"
              ? "Найдите свои инновационные решения в"
              : "Find Your Innovative Solutions in"}{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #E55733, #F5BD33)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
              className={innovativeSolution[1] ? styles.innovativeSolution : ""}
            >
              {innovativeSolution[0]}
            </span>
          </h1>
          <p>
            {lang == "ru"
              ? "Ознакомьтесь с нашей динамичной сетью компаний, каждая из которых является лидером в своей отрасли — от автоматизации и ИТ-решений до бесперебойной логистики и незабываемых путешествий."
              : "Explore our dynamic network of companies, each leading the way in their industry—from automation and IT solutions to seamless logistics and unforgettable travel experiences."}
          </p>
          <Button func={() => scrollToTarget(companyRef)}>
            {lang == "ru" ? "Узнать больше" : "Learn More"}
          </Button>
        </div>

        <div className={styles.transformImg}>
          <img
            className={firstAnimPlay ? styles.fristPart : ""}
            src={bg3}
            alt="#"
          />
          <img
            className={secondAnimPlay ? styles.secondPart : ""}
            src={bg4}
            alt="#"
          />
          <img
            className={thirdAnimPlay ? styles.thirdPart : ""}
            src={bg3}
            alt="#"
          />
          <img
            className={thirdAnimPlay ? styles.thirdPart : ""}
            src={bg4}
            alt="#"
          />
          <img
            className={secondAnimPlay ? styles.secondPart : ""}
            src={bg3}
            alt="#"
          />
          <img
            className={firstAnimPlay ? styles.fristPart : ""}
            src={bg4}
            alt="#"
          />
        </div>
      </section>

      <Companies companyRef={companyRef} />
      <OurProjects />
      <Feedback />
      <OurPartners />
      <Footer />
    </>
  );
};

export default MainPage;
