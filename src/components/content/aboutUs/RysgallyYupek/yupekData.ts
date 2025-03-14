interface IYupekData {
  name: ILang;
  img: string;
}

interface ILang {
  en: string;
  ru: string;
  [key: string]: string;
}

export const yupekData: IYupekData[] = [
  {
    name: {
      en: "Visa support",
      ru: "Визовая поддержка",
    },
    img: "src/components/content/aboutUs/RysgallyYupek/img/visa.png",
  },
  {
    name: {
      en: "Transportation services",
      ru: "Транспортные услуги",
    },
    img: "src/components/content/aboutUs/RysgallyYupek/img/taxi.png",
  },
  {
    name: {
      en: "Guide services",
      ru: "Услуги гида",
    },
    img: "src/components/content/aboutUs/RysgallyYupek/img/gid.png",
  },
  {
    name: {
      en: "Hotel reservations",
      ru: "Бронирование отелей",
    },
    img: "src/components/content/aboutUs/RysgallyYupek/img/hotel.png",
  },
];
