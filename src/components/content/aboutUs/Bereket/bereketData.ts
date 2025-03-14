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
    img: "src/components/content/aboutUs/Bereket/img/cardImg.png",
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
    img: "src/components/content/aboutUs/Bereket/img/cardImg (1).png",
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
    img: "src/components/content/aboutUs/Bereket/img/cardImg (2).png",
    style: {
      gridRow: "3 / 4",
      gridColumn: "1 / 2",
    },
  },
];
