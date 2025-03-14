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
    image:
      "src/components/content/vacancy/vacancyDetails/vacancyCard/cardsImage/Module.png",
  },
  {
    company: "Vexora",
    profesion: {
      en: "Medical Assistant",
      ru: "Фельдшер",
    },
    image:
      "src/components/content/vacancy/vacancyDetails/vacancyCard/cardsImage/Module(7).png",
  },
  {
    company: "Lunexis",
    profesion: {
      en: "Tourism specialist",
      ru: "Специалист по туризму",
    },
    image:
      "src/components/content/vacancy/vacancyDetails/vacancyCard/cardsImage/Module(6).png",
  },
  {
    company: "Brizora",
    profesion: {
      en: "Nursing Assistant",
      ru: "Ассистент медсестры",
    },
    image:
      "src/components/content/vacancy/vacancyDetails/vacancyCard/cardsImage/Module(5).png",
  },
  {
    company: "Terniq",
    profesion: {
      en: "Marketing Coordinator",
      ru: "Координатор по маркетингу",
    },
    image:
      "src/components/content/vacancy/vacancyDetails/vacancyCard/cardsImage/Module(4).png",
  },
  {
    company: "Sylox",
    profesion: {
      en: "Programmer",
      ru: "Программист",
    },
    image:
      "src/components/content/vacancy/vacancyDetails/vacancyCard/cardsImage/Module(3).png",
  },
  {
    company: "Xelvora",
    profesion: {
      en: "Sales Manager",
      ru: "Менеджер по продажам",
    },
    image:
      "src/components/content/vacancy/vacancyDetails/vacancyCard/cardsImage/Module(2).png",
  },
  {
    company: "Dravex",
    profesion: {
      en: "Travel Manager",
      ru: "Менеджер по путешествиям",
    },
    image:
      "src/components/content/vacancy/vacancyDetails/vacancyCard/cardsImage/Module(1).png",
  },
];
