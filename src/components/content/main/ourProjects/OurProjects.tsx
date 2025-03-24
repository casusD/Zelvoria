import { useState, useEffect } from "react";
import styles from "./OurProjects.module.scss";

import "react-alice-carousel/lib/alice-carousel.css";
import { useInnovativeSolutionsIteration } from "../../../../hooks/useInnovativeSolutionsIteration";
import {
  LangType,
  useModalContext,
} from "../../vacancy/modalVacancy/ModalContext";

import busPay from "../../../../images/projects/busPay.png";
import prcssng from "../../../../images/projects/prcssng.png";
import internetbnkng from "../../../../images/projects/internetbnkng.png";
import senagatApp from "../../../../images/projects/senagatApp.png";
import terminal from "../../../../images/projects/terminal.png";
import gumruk from "../../../../images/projects/gumruk.png";
import osus from "../../../../images/projects/osus.png";
import sinopec from "../../../../images/projects/sinopec.png";

import bus from "../../../../images/bgProjects/bus.png";
import senagatPrcs from "../../../../images/bgProjects/senagatPrcs.png";
import internetbnkngBG from "../../../../images/bgProjects/internetbnkng.png";
import senagatAppBG from "../../../../images/bgProjects/senagatApp.png";
import terminalBG from "../../../../images/bgProjects/terminal.png";
import gumrukBG from "../../../../images/bgProjects/gumruk.png";
import osusBank from "../../../../images/bgProjects/osusBank.png";
import sinopecBG from "../../../../images/bgProjects/sinopec.png";

interface IProject {
  currentProject: string;
  nextProject: string;
  animate: boolean;
  bg: number;
}

const projectsImage: string[] = [
  busPay,
  prcssng,
  internetbnkng,
  senagatApp,
  terminal,
  gumruk,
  osus,
  sinopec,
];

const projectsImageBg: string[] = [
  bus,
  senagatPrcs,
  internetbnkngBG,
  senagatAppBG,
  terminalBG,
  gumrukBG,
  osusBank,
  sinopecBG,
];

const useProject = (arr: string[]) => {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [nextProject, setNextProject] = useState<number>(1);
  const [bg, setBg] = useState<number>(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentProject((p) => (p + 1) % arr.length);
        setNextProject((p) => (p + 1) % arr.length);
        setBg((p) => (p + 1) % arr.length);
        setAnimate(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const obj: IProject = {
    currentProject: arr[currentProject],
    nextProject: arr[nextProject],
    animate: animate,
    bg: bg,
  };

  return obj;
};

const projectsList: Record<LangType, string[]> = {
  en: [
    "Bus Payment System",
    "Processing Center for Brizora",
    "Internet Banking for Brizora",
    "Brizora Mobile Pay",
    "Brizora Pay Terminals",
    "Software Integration",
    "Cybersecurity Audit",
    "Security System",
  ],
  ru: [
    "Система оплаты проезда в автобусах",
    "Процессинговый центр для Brizora",
    "Интернет-банкинг для Brizora",
    "Мобильная оплата Brizora",
    "Терминалы оплаты Brizora",
    "Интеграция программного обеспечения",
    "Аудит кибербезопасности",
    "Система безопасности",
  ],
};

const OurProjects = () => {
  const objProject = useProject(projectsImage);

  const { lang } = useModalContext();

  const projectsListIndexs = useInnovativeSolutionsIteration(
    projectsList[lang]
  );

  return (
    <>
      <div className={styles.projects}>
        <div className={styles.content}>
          <p>
            {lang == "ru" ? "Исследуйте наши" : "Explore Our"} <br />{" "}
            <span>{lang == "ru" ? "Проекты" : "Projects"}</span>
          </p>
          <div className={styles.projectsList}>
            <p className={projectsListIndexs[1] ? styles.projectsNameAnim : ""}>
              {projectsListIndexs[0]}
            </p>
            <div>
              <img
                className={
                  objProject.animate
                    ? `${styles.currentProjectAnim} ${styles.currentProject}`
                    : styles.currentProject
                }
                src={objProject.currentProject}
                alt="#"
              />
              <img
                className={
                  objProject.animate
                    ? `${styles.nextProjectAnim} ${styles.nextProject}`
                    : styles.nextProject
                }
                src={objProject.nextProject}
                alt="#"
              />
            </div>
          </div>
        </div>
        <div
          className={styles.bgOpacity}
          style={{ backgroundImage: `url(${projectsImageBg[objProject.bg]})` }}
        ></div>
      </div>
    </>
  );
};

export default OurProjects;
