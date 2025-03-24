import visa from "./img/visa.png";
import taxi from "./img/taxi.png";
import gid from "./img/gid.png";
import hotel from "./img/hotel.png";

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
    img: visa,
  },
  {
    name: {
      en: "Transportation services",
      ru: "Транспортные услуги",
    },
    img: taxi,
  },
  {
    name: {
      en: "Guide services",
      ru: "Услуги гида",
    },
    img: gid,
  },
  {
    name: {
      en: "Hotel reservations",
      ru: "Бронирование отелей",
    },
    img: hotel,
  },
];
