import moduleImg from "./cardsImage/Module.png";
import moduleImg1 from "./cardsImage/Module(1).png";
import moduleImg2 from "./cardsImage/Module(2).png";
import moduleImg3 from "./cardsImage/Module(3).png";
import moduleImg4 from "./cardsImage/Module(4).png";
import moduleImg5 from "./cardsImage/Module(5).png";
import moduleImg6 from "./cardsImage/Module(6).png";
import moduleImg7 from "./cardsImage/Module(7).png";

export interface ICards {
  company: string;
  profesion: Iprofesion;
  image: string;
}

interface Iprofesion {
  en: string;
  ru: string;
  [key: string]: string;
}

export const cards: ICards[] = [
  {
    company: "Zeronto",
    profesion: {
      en: "Programmer",
      ru: "Программист",
    },
    image: moduleImg,
  },
  {
    company: "Vexora",
    profesion: {
      en: "Medical Assistant",
      ru: "Фельдшер",
    },
    image: moduleImg7,
  },
  {
    company: "Lunexis",
    profesion: {
      en: "Tourism specialist",
      ru: "Специалист по туризму",
    },
    image: moduleImg6,
  },
  {
    company: "Brizora",
    profesion: {
      en: "Nursing Assistant",
      ru: "Ассистент медсестры",
    },
    image: moduleImg5,
  },
  {
    company: "Terniq",
    profesion: {
      en: "Marketing Coordinator",
      ru: "Координатор по маркетингу",
    },
    image: moduleImg4,
  },
  {
    company: "Sylox",
    profesion: {
      en: "Programmer",
      ru: "Программист",
    },
    image: moduleImg3,
  },
  {
    company: "Xelvora",
    profesion: {
      en: "Sales Manager",
      ru: "Менеджер по продажам",
    },
    image: moduleImg2,
  },
  {
    company: "Dravex",
    profesion: {
      en: "Travel Manager",
      ru: "Менеджер по путешествиям",
    },
    image: moduleImg1,
  },
];
