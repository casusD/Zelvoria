import moduleImg from "../vacancy/vacancyDetails/vacancyCard/cardsImage/Module.png";
import moduleImg1 from "../vacancy/vacancyDetails/vacancyCard/cardsImage/Module(1).png";
import moduleImg2 from "../vacancy/vacancyDetails/vacancyCard/cardsImage/Module(2).png";
import moduleImg3 from "../vacancy/vacancyDetails/vacancyCard/cardsImage/Module(3).png";
import moduleImg4 from "../vacancy/vacancyDetails/vacancyCard/cardsImage/Module(4).png";
import moduleImg5 from "../vacancy/vacancyDetails/vacancyCard/cardsImage/Module(5).png";

interface IAboutUsLogos {
  name: string;
  url: string;
}

export const logos: IAboutUsLogos[] = [
  {
    name: "Zeronto",
    url: moduleImg,
  },
  {
    name: "Vexora",
    url: moduleImg1,
  },
  {
    name: "Lunexis",
    url: moduleImg2,
  },
  {
    name: "Brizora",
    url: moduleImg3,
  },
  {
    name: "Terniq",
    url: moduleImg4,
  },
  {
    name: "Xelvora",
    url: moduleImg5,
  },
];
