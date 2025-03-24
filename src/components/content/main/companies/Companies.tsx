import { useNavigate } from "react-router-dom";
import Button from "../../../layout/button/Button";
import { useModalContext } from "../../vacancy/modalVacancy/ModalContext";
import styles from "./Companies.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import moduleImg from "../../vacancy/vacancyDetails/vacancyCard/cardsImage/Module.png";
import moduleImg1 from "../../vacancy/vacancyDetails/vacancyCard/cardsImage/Module(1).png";
import moduleImg2 from "../../vacancy/vacancyDetails/vacancyCard/cardsImage/Module(2).png";
import moduleImg3 from "../../vacancy/vacancyDetails/vacancyCard/cardsImage/Module(3).png";
import moduleImg4 from "../../vacancy/vacancyDetails/vacancyCard/cardsImage/Module(4).png";
import moduleImg5 from "../../vacancy/vacancyDetails/vacancyCard/cardsImage/Module(5).png";
import moduleImg6 from "../../vacancy/vacancyDetails/vacancyCard/cardsImage/Module(6).png";
import moduleImg7 from "../../vacancy/vacancyDetails/vacancyCard/cardsImage/Module(7).png";

const companies1 = [
  <img src={moduleImg} alt="#" />,
  <img src={moduleImg1} alt="#" />,
  <img src={moduleImg2} alt="#" />,
  <img src={moduleImg3} alt="#" />,

  <img src={moduleImg4} alt="#" />,
  <img src={moduleImg5} alt="#" />,
  <img src={moduleImg6} alt="#" />,
  <img src={moduleImg7} alt="#" />,
];

const responsive = {
  0: { items: 1 }, // 1 картинка на маленьких экранах
  600: { items: 2 }, // 2 картинки при ширине > 600px
  1024: { items: 4 }, // 3 картинки при ширине > 1024px
};

const Companies = ({
  companyRef,
}: {
  companyRef: React.RefObject<HTMLDivElement>;
}) => {
  const { lang } = useModalContext();

  const navigate = useNavigate();

  return (
    <>
      <div ref={companyRef} className={styles.companies}>
        <p>
          {lang == "ru" ? "Исследуйте наши" : "Explore Our"} <br />{" "}
          <span>{lang == "ru" ? "Компании" : "Companies"}</span>
        </p>
        <h3>
          {lang == "ru"
            ? "Мы - группа компаний, работающая в различных секторах бизнеса."
            : "We are a group of companies expanding across multiple business sectors."}
        </h3>
        <Button func={() => navigate("/aboutUs")}>
          {lang == "ru" ? "Узнать больше" : "Learn More"}
        </Button>
        <div className={styles.companiesLogo}>
          <AliceCarousel
            autoPlay
            infinite
            items={companies1}
            autoPlayInterval={1000}
            responsive={responsive}
            disableDotsControls
            disableButtonsControls
          />
        </div>
      </div>
    </>
  );
};

export default Companies;
