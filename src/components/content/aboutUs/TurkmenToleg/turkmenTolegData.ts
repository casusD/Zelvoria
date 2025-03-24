import cardImg from "./img/cardImg.png";
import cardImg1 from "./img/cardImg (1).png";
import cardImg2 from "./img/cardImg (2).png";
import cardImg3 from "./img/cardImg (3).png";
import cardImg4 from "./img/cardImg (4).png";
import cardImg5 from "./img/cardImg (5).png";
import cardImg6 from "./img/cardImg (6).png";
import cardImg7 from "./img/cardImg (7).png";
import cardImg8 from "./img/cardImg (8).png";

interface ITurkmenTolegData {
  name: INameTitle;
  img: string;
}

interface INameTitle {
  en: string;
  ru: string;
  [key: string]: string;
}

export const turkmenTolegData: ITurkmenTolegData[] = [
  {
    name: {
      en: "Construction and commissioning of banking management solutions",
      ru: "Построение и ввод в эксплуатацию банковских управленческих решений",
    },
    img: cardImg,
  },
  {
    name: {
      en: "Building of processing and preprocessing systems, their integration with existing system",
      ru: "Построение процессингов и препроцессингов, их интеграции с существующими системами",
    },
    img: cardImg1,
  },
  {
    name: {
      en: "Writing additional extensions on customer request",
      ru: "Написание допольнительных расширений по заказу клиентов",
    },
    img: cardImg2,
  },
  {
    name: {
      en: "Building terminal and ATM networks",
      ru: "Построение терминальных и банкоматных сетей",
    },
    img: cardImg3,
  },
  {
    name: {
      en: "Building Internet services",
      ru: "Выстраивание интернет услуг",
    },
    img: cardImg4,
  },
  {
    name: {
      en: "Creating a mobile banking service",
      ru: "Создание мобильного банкинга",
    },
    img: cardImg5,
  },
  {
    name: {
      en: "Implementation of online payments for the services offered",
      ru: "Реализация интернет оплат за предлагаемые услуги",
    },
    img: cardImg6,
  },
  {
    name: {
      en: "Implementation of the offered services in terminal networks of other companies or banks",
      ru: "Внедрения предлагаемых услуг в терминальные сети других компаний или банков",
    },
    img: cardImg7,
  },
  {
    name: {
      en: "Building a network of information kiosks and terminals and other types of services related to express payment",
      ru: "Построение сети инфо-киосков терминалов и другие виды предоставления услуг связанных с экспресс оплатой",
    },
    img: cardImg8,
  },
];
