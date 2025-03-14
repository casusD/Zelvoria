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
    img: "src/components/content/aboutUs/Atm/images/cardImg.png",
  },
  {
    name: {
      en: "Cybersecurity systems",
      ru: "Системы кибербезопасности",
    },
    img: "src/components/content/aboutUs/Atm/images/cardImg (1).png",
  },
  {
    name: {
      en: "IT solutions",
      ru: "ИТ-решения",
    },
    img: "src/components/content/aboutUs/Atm/images/cardImg (2).png",
  },
  {
    name: {
      en: "Electricity metering systems",
      ru: "Системы учета электроэнергии",
    },
    img: "src/components/content/aboutUs/Atm/images/cardImg (3).png",
  },
  {
    name: {
      en: "Automation systems",
      ru: "Системы автоматизации",
    },
    img: "src/components/content/aboutUs/Atm/images/cardImg (4).png",
  },
  {
    name: {
      en: "Payment systems",
      ru: "Платежные системы",
    },
    img: "src/components/content/aboutUs/Atm/images/cardImg (5).png",
  },
  {
    name: {
      en: "Software direction",
      ru: "Направление разработки программного обеспечения",
    },
    img: "src/components/content/aboutUs/Atm/images/cardImg (6).png",
  },
  {
    name: {
      en: "Development of specialized turnkey software",
      ru: "Разработка специализированного программного обеспечения 'под ключ'",
    },
    img: "src/components/content/aboutUs/Atm/images/cardImg (7).png",
  },
  {
    name: {
      en: "Supply of chemicals for drilling companies",
      ru: "Поставка химикатов для буровых компаний",
    },
    img: "src/components/content/aboutUs/Atm/images/cardImg (8).png",
  },
];
