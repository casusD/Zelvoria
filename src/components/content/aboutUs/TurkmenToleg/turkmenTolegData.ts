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
    img: "src/components/content/aboutUs/TurkmenToleg/img/cardImg.png",
  },
  {
    name: {
      en: "Building of processing and preprocessing systems, their integration with existing system",
      ru: "Построение процессингов и препроцессингов, их интеграции с существующими системами",
    },
    img: "src/components/content/aboutUs/TurkmenToleg/img/cardImg (1).png",
  },
  {
    name: {
      en: "Writing additional extensions on customer request",
      ru: "Написание допольнительных расширений по заказу клиентов",
    },
    img: "src/components/content/aboutUs/TurkmenToleg/img/cardImg (2).png",
  },
  {
    name: {
      en: "Building terminal and ATM networks",
      ru: "Построение терминальных и банкоматных сетей",
    },
    img: "src/components/content/aboutUs/TurkmenToleg/img/cardImg (3).png",
  },
  {
    name: {
      en: "Building Internet services",
      ru: "Выстраивание интернет услуг",
    },
    img: "src/components/content/aboutUs/TurkmenToleg/img/cardImg (4).png",
  },
  {
    name: {
      en: "Creating a mobile banking service",
      ru: "Создание мобильного банкинга",
    },
    img: "src/components/content/aboutUs/TurkmenToleg/img/cardImg (5).png",
  },
  {
    name: {
      en: "Implementation of online payments for the services offered",
      ru: "Реализация интернет оплат за предлагаемые услуги",
    },
    img: "src/components/content/aboutUs/TurkmenToleg/img/cardImg (6).png",
  },
  {
    name: {
      en: "Implementation of the offered services in terminal networks of other companies or banks",
      ru: "Внедрения предлагаемых услуг в терминальные сети других компаний или банков",
    },
    img: "src/components/content/aboutUs/TurkmenToleg/img/cardImg (7).png",
  },
  {
    name: {
      en: "Building a network of information kiosks and terminals and other types of services related to express payment",
      ru: "Построение сети инфо-киосков терминалов и другие виды предоставления услуг связанных с экспресс оплатой",
    },
    img: "src/components/content/aboutUs/TurkmenToleg/img/cardImg (8).png",
  },
];
