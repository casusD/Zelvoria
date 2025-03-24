import cardImg from "./images/cardImg.png";
import cardImg1 from "./images/cardImg (1).png";
import cardImg2 from "./images/cardImg (2).png";
import cardImg3 from "./images/cardImg (3).png";
import cardImg4 from "./images/cardImg (4).png";
import cardImg5 from "./images/cardImg (5).png";
import cardImg6 from "./images/cardImg (6).png";
import cardImg7 from "./images/cardImg (7).png";
import cardImg8 from "./images/cardImg (8).png";

interface IAtmData {
  name: INameTitle;
  img: string;
}

interface INameTitle {
  en: string;
  ru: string;
  [key: string]: string;
}

export const atmData: IAtmData[] = [
  {
    name: {
      en: "Telecommunications",
      ru: "Телекоммуникации",
    },
    img: cardImg,
  },
  {
    name: {
      en: "Cybersecurity systems",
      ru: "Системы кибербезопасности",
    },
    img: cardImg1,
  },
  {
    name: {
      en: "IT solutions",
      ru: "ИТ-решения",
    },
    img: cardImg2,
  },
  {
    name: {
      en: "Electricity metering systems",
      ru: "Системы учета электроэнергии",
    },
    img: cardImg3,
  },
  {
    name: {
      en: "Automation systems",
      ru: "Системы автоматизации",
    },
    img: cardImg4,
  },
  {
    name: {
      en: "Payment systems",
      ru: "Платежные системы",
    },
    img: cardImg5,
  },
  {
    name: {
      en: "Software direction",
      ru: "Направление разработки программного обеспечения",
    },
    img: cardImg6,
  },
  {
    name: {
      en: "Development of specialized turnkey software",
      ru: "Разработка специализированного программного обеспечения 'под ключ'",
    },
    img: cardImg7,
  },
  {
    name: {
      en: "Supply of chemicals for drilling companies",
      ru: "Поставка химикатов для буровых компаний",
    },
    img: cardImg8,
  },
];
