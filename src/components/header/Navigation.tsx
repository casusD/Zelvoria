// import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "../layout/button/Button";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import {
  LangType,
  useModalContext,
} from "../content/vacancy/modalVacancy/ModalContext";
import { useScrollContext } from "../content/main/MainPage/ScrollContext";

interface INav {
  logo?: boolean;
  children?: React.ReactNode;
}

export default function Navigation({ logo, children }: INav) {
  const { setLang, lang } = useModalContext();

  const [langDropDown, setLangDropDown] = useState(false);
  const [langChange, setLangChange] = useState("en");

  const { targetRef } = useScrollContext();

  const handleScroll = () => {
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as LangType;
    if (savedLang === "en" || savedLang === "ru") {
      setLang(savedLang);
      setLangChange(savedLang);
    }
  }, []);

  const handleLangDropDown = () => {
    setLangDropDown((prev) => !prev);
  };

  const handleLangChange = (lang: LangType) => {
    localStorage.setItem("lang", lang);
    setLang(lang);
    setLangChange(lang);
    setLangDropDown((prev) => !prev);
  };

  return (
    <header
      className={!logo ? `${styles.navBar} ${styles.miniBar}` : styles.navBar}
    >
      {logo && (
        <h1>
          Group of Companies <br /> Zelvoria
        </h1>
      )}

      <nav>
        <div className={styles.links}>
          {!children && (
            <p>
              <Link to="/">{lang == "ru" ? "Главная" : "Home"}</Link>
            </p>
          )}

          {children && <p>{children}</p>}
          <p>
            <Link to="/vacancies">
              {lang == "ru" ? "Вакансии" : "Vacancies"}
            </Link>
          </p>
          <p>
            <Link to="/aboutUs">{lang == "ru" ? "О нас" : "About us"}</Link>
          </p>
        </div>

        <div>
          <Button func={handleScroll}>
            {lang == "ru" ? "Связаться с нами" : "Contact us"}
          </Button>
          {langDropDown ? (
            <div
              className={styles.lang}
              style={{ right: !logo ? "17.2%" : "2.8%" }}
            >
              <p onClick={() => handleLangChange("ru")}>ru</p>
              <p onClick={() => handleLangChange("en")}>en</p>
            </div>
          ) : (
            <p onClick={() => handleLangDropDown()}>{langChange}</p>
          )}
        </div>
      </nav>

      {/* {isVisible && (
        <div className={`${styles.dropDown} ${!dropDown ? styles.hide : ""}`}>
          <p>Awtomatizasiya Tehnologiyalaryn Merkezi</p>
          <p>Bereket Gözbaşy</p>
          <p>Boýa Dag</p>
          <p>Tükmen Töleg Hyzmatlary</p>
          <p>Tükmen IT-Park</p>
          <p>Entrepreneur A.Shihiyew</p>
          <p>Rysgally Ýüpek Ýol</p>
          <p>Travel Agency</p>
        </div>
      )} */}

      {/* {langDropDown && (
        <div
          className={styles.lang}
          style={{ right: !logo ? "17.2%" : "2.8%" }}
        >
          <p onClick={() => handleLangChange("ru")}>ru</p>
          <p onClick={() => handleLangChange("en")}>en</p>
        </div>
      )} */}
    </header>
  );
}
