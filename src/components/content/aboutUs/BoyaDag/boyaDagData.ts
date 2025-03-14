interface IBoyaDagData {
  name: INameTitle;
  img: string;
}

interface INameTitle {
  en: string;
  ru: string;
  [key: string]: string;
}

export const boyaDagData: IBoyaDagData[] = [
  {
    name: {
      en: "Engineering and design services",
      ru: "Инжиниринговые и проектные услуги",
    },
    img: "src/components/content/aboutUs/BoyaDag/img/cardImg.png",
  },
  {
    name: {
      en: "Construction and project management",
      ru: "Строительство и управление проектами",
    },
    img: "src/components/content/aboutUs/BoyaDag/img/cardImg (1).png",
  },
  {
    name: {
      en: "Maintenance and repair",
      ru: "Техническое обслуживание и ремонт",
    },
    img: "src/components/content/aboutUs/BoyaDag/img/cardImg (2).png",
  },
  {
    name: {
      en: "Optimization solutions to increase efficiency and reduce costs",
      ru: "Оптимизационные решения для повышения эффективности и снижения затрат",
    },
    img: "src/components/content/aboutUs/BoyaDag/img/cardImg (3).png",
  },
  {
    name: {
      en: "Safety and environmental solutions for compliance and risk minimization",
      ru: "Решения по безопасности и экологии для соблюдения норм и минимизации рисков",
    },
    img: "src/components/content/aboutUs/BoyaDag/img/cardImg (4).png",
  },
  {
    name: {
      en: "Automation and control solutions for increased productivity and accuracy",
      ru: "Решения по автоматизации и управлению для повышения производительности и точности",
    },
    img: "src/components/content/aboutUs/BoyaDag/img/cardImg (5).png",
  },
];
