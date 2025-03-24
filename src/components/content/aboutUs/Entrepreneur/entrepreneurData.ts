import cardImg from "./img/cardImg.png";
import cardImg1 from "./img/cardImg (1).png";
import cardImg2 from "./img/cardImg (2).png";
import cardImg3 from "./img/cardImg (3).png";
import cardImg4 from "./img/cardImg (4).png";
import cardImg5 from "./img/cardImg (5).png";
import cardImg6 from "./img/cardImg (6).png";
import cardImg7 from "./img/cardImg (7).png";
import cardImg8 from "./img/cardImg (8).png";
import cardImg9 from "./img/cardImg (9).png";
import cardImg10 from "./img/cardImg (10).png";
import cardImg11 from "./img/cardImg (11).png";
import cardImg12 from "./img/cardImg (12).png";
import cardImg13 from "./img/cardImg (13).png";
import cardImg14 from "./img/cardImg (14).png";
import cardImg15 from "./img/cardImg (15).png";
import cardImg16 from "./img/cardImg (16).png";
import cardImg17 from "./img/cardImg (17).png";
import cardImg18 from "./img/cardImg (18).png";
import cardImg19 from "./img/cardImg (19).png";
import cardImg20 from "./img/cardImg (20).png";
import cardImg21 from "./img/cardImg (21).png";
import cardImg22 from "./img/cardImg (22).png";
import cardImg23 from "./img/cardImg (23).png";
import cardImg24 from "./img/cardImg (24).png";

interface IentrepreneurData {
  name: INameTitle;
  img: string;
}

interface INameTitle {
  en: string;
  ru: string;
  [key: string]: string;
}

export const entrepreneurData: IentrepreneurData[] = [
  {
    name: {
      en: "Materials for the cladding device",
      ru: "Материалы для устройства облицовок",
    },
    img: cardImg,
  },
  {
    name: {
      en: "Grouts and sealants",
      ru: "Затирки и герметики",
    },
    img: cardImg1,
  },
  {
    name: {
      en: "Materials for flooring",
      ru: "Материалы для устройства полов",
    },
    img: cardImg2,
  },
  {
    name: {
      en: "Waterproofing materials",
      ru: "Гидроизоляционные материалы",
    },
    img: cardImg3,
  },
  {
    name: {
      en: "Special cements and materials for concrete repair",
      ru: "Специальные цементы и материалы для ремонта бетона",
    },
    img: cardImg4,
  },
  {
    name: {
      en: "Facade finishing materials",
      ru: "Материалы для отделки фасадов",
    },
    img: cardImg5,
  },
  {
    name: {
      en: "Pipe sealing",
      ru: "Трубная герметизация",
    },
    img: cardImg6,
  },
  {
    name: {
      en: "Chemical Anchors",
      ru: "Химические анкеры",
    },
    img: cardImg7,
  },
  {
    name: {
      en: "Mounting foams",
      ru: "Монтажные пены",
    },
    img: cardImg8,
  },
  {
    name: {
      en: "Adhesives for tiles",
      ru: "Клеи для кафеля",
    },
    img: cardImg9,
  },
  {
    name: {
      en: "Grouting for joints",
      ru: "Затирки для швов",
    },
    img: cardImg10,
  },
  {
    name: {
      en: "Plasters and decorative plasters",
      ru: "Штукатурки и декоративные штукатурки",
    },
    img: cardImg11,
  },
  {
    name: {
      en: "Glue and grout for GCL",
      ru: "Клей и затирка для ГКЛ",
    },
    img: cardImg12,
  },
  {
    name: {
      en: "Putties",
      ru: "Шпатлевки",
    },
    img: cardImg13,
  },
  {
    name: {
      en: "Acoustic, thermal and waterproofing",
      ru: "Акустическая, тепловая и гидроизоляция",
    },
    img: cardImg14,
  },
  {
    name: {
      en: "Paints for thermal insulation, interior, road, facade, concrete",
      ru: "Краски для теплоизоляции, интерьерные, дорожные, фасадные, по бетону",
    },
    img: cardImg15,
  },
  {
    name: {
      en: "Epoxy, self-leveling, polished floors",
      ru: "Полы эпоксидные, наливные, полированные",
    },
    img: cardImg16,
  },
  {
    name: {
      en: "Primers",
      ru: "Грунтовки",
    },
    img: cardImg17,
  },
  {
    name: {
      en: "Micro-cement",
      ru: "Микроцемент",
    },
    img: cardImg18,
  },
  {
    name: {
      en: "Terrazzo",
      ru: "Терраццо",
    },
    img: cardImg19,
  },
  {
    name: {
      en: "Architectural concrete",
      ru: "Архитектурный бетон",
    },
    img: cardImg20,
  },
  {
    name: {
      en: "Toppings and curings",
      ru: "Топпинги и кюринги",
    },
    img: cardImg21,
  },
  {
    name: {
      en: "Concrete repair",
      ru: "Ремонт бетона",
    },
    img: cardImg22,
  },
  {
    name: {
      en: "Concrete additives",
      ru: "Бетонные добавки",
    },
    img: cardImg23,
  },
  {
    name: {
      en: "Educational materials",
      ru: "Вспомагательные материалы",
    },
    img: cardImg24,
  },
];
