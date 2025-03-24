import cardImg from "./img/cardImg.png";
import cardImg1 from "./img/cardImg (1).png";
import cardImg2 from "./img/cardImg (2).png";
import cardImg3 from "./img/cardImg (3).png";
import cardImg4 from "./img/cardImg (4).png";
import cardImg5 from "./img/cardImg (5).png";

interface IBoyaDagData {
  name: INameTitle;
  img: string;
}

interface INameTitle {
  en: string;
  ru: string;
  [key: string]: string;
}

export const boyaDagData: IBoyaDagData[] = [
  {
    name: {
      en: "Engineering and design services",
      ru: "Инжиниринговые и проектные услуги",
    },
    img: cardImg,
  },
  {
    name: {
      en: "Construction and project management",
      ru: "Строительство и управление проектами",
    },
    img: cardImg1,
  },
  {
    name: {
      en: "Maintenance and repair",
      ru: "Техническое обслуживание и ремонт",
    },
    img: cardImg2,
  },
  {
    name: {
      en: "Optimization solutions to increase efficiency and reduce costs",
      ru: "Оптимизационные решения для повышения эффективности и снижения затрат",
    },
    img: cardImg3,
  },
  {
    name: {
      en: "Safety and environmental solutions for compliance and risk minimization",
      ru: "Решения по безопасности и экологии для соблюдения норм и минимизации рисков",
    },
    img: cardImg4,
  },
  {
    name: {
      en: "Automation and control solutions for increased productivity and accuracy",
      ru: "Решения по автоматизации и управлению для повышения производительности и точности",
    },
    img: cardImg5,
  },
];
