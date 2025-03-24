import cardImg from "./img/cardImg.png";
import cardImg1 from "./img/cardImg (1).png";
import cardImg2 from "./img/cardImg (2).png";

interface IBereketData {
  name: ILang;
  img: string;
  style: any;
}

interface ILang {
  en: string;
  ru: string;
  [key: string]: string;
}

export const bereketData: IBereketData[] = [
  {
    name: {
      en: "Freight forwarding",
      ru: "Экспедирование грузов",
    },
    img: cardImg,
    style: {
      gridRow: "1 /  2",
      gridColumn: "1 / 2",
    },
  },
  {
    name: {
      en: "Customs clearance",
      ru: "Таможенное оформление",
    },
    img: cardImg1,
    style: {
      gridRow: "2 / 3",
      gridColumn: "2 / 3",
    },
  },
  {
    name: {
      en: "Logistics solutions",
      ru: "Логистические решения",
    },
    img: cardImg2,
    style: {
      gridRow: "3 / 4",
      gridColumn: "1 / 2",
    },
  },
];
