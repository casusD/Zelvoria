import { useModalContext } from "../../modalVacancy/ModalContext";
import { usevacancyContext } from "../../VacancyContext";
import styles from "./Card.module.scss";
import { cards } from "./cards";

const Card = () => {
  const { vacancy, setDetails, setVacancy } = usevacancyContext();
  const { lang } = useModalContext();

  return (
    <section className={styles.cards}>
      {cards
        .filter((card) => vacancy === "all" || card.company === vacancy)
        .map((card, index) => (
          <div className={styles.card} key={index}>
            <div>
              <p>
                {card.company} <br /> <span>{card.profesion[lang]}</span>
              </p>
              <img src={card.image} alt={card.company} />
            </div>
            <button
              onClick={() => {
                setDetails(true);
                setVacancy(card.company);
              }}
            >
              {lang == "ru" ? "Детали" : "Details"}
            </button>
          </div>
        ))}
    </section>
  );
};

export default Card;
