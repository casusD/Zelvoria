import Button from "../../../../layout/button/Button";
import { usevacancyContext } from "../../VacancyContext";
import { useModalContext } from "../../modalVacancy/ModalContext";
import styles from "./Details.module.scss";
import { deatilsData } from "./details.data";

const Details = () => {
  const { vacancy } = usevacancyContext();
  const { setModal } = useModalContext();
  const { lang } = useModalContext();

  return deatilsData.map((detal, index) => {
    if (detal.title.company === vacancy) {
      return (
        <article key={index} className={styles.details}>
          <header>
            <h1>
              {detal.title.company} <br />{" "}
              <span>{detal.title.vacancy[lang]}</span>
            </h1>
            <p>
              <span>Published: 26.09.2024</span>
              <span>Applied: 5</span>
            </p>
          </header>
          <p className={styles.detailsText}>{detal.text[lang]}</p>

          <div className={styles.conditions}>
            <div className={styles.pinkCard}>
              <h4>{detal.card.requirements.header[lang]}</h4>
              <ul>
                {detal.card.requirements.list[lang].map((elem, index) => (
                  <li key={index}>{elem}</li>
                ))}
              </ul>
            </div>
            <div className={styles.greenCard}>
              <h4>{detal.card.responsibilities.header[lang]}</h4>
              <ul>
                {detal.card.responsibilities.list[lang].map((elem, index) => (
                  <li key={index}>{elem}</li>
                ))}
              </ul>
            </div>
            <div className={styles.blueCard}>
              <h4>{detal.card.offers.header[lang]}</h4>
              <ul>
                {detal.card.offers.list[lang].map((elem, index) => (
                  <li key={index}>{elem}</li>
                ))}
              </ul>
            </div>
          </div>

          <Button func={() => setModal(true)}>
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"} {lang == "ru" ? "Применить" : "Apply"} {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
          </Button>
        </article>
      );
    }
  });
};

export default Details;
