import { useState, useEffect } from "react";
import styles from "./OurProjects.module.scss";

import "react-alice-carousel/lib/alice-carousel.css";
import { useInnovativeSolutionsIteration } from "../../../../hooks/useInnovativeSolutionsIteration";
import {
  LangType,
  useModalContext,
} from "../../vacancy/modalVacancy/ModalContext";

interface IProject {
  currentProject: string;
  nextProject: string;
  animate: boolean;
  bg: number;
}

const projectsImage: string[] = [
  "src/images/projects/busPay.png",
  "src/images/projects/prcssng.png",
  "src/images/projects/internetbnkng.png",
  "src/images/projects/senagatApp.png",
  "src/images/projects/terminal.png",
  "src/images/projects/gumruk.png",
  "src/images/projects/osus.png",
  "src/images/projects/sinopec.png",
];

const projectsImageBg: string[] = [
  "src/images/bgProjects/bus.png",
  "src/images/bgProjects/senagatPrcs.png",
  "src/images/bgProjects/internetbnkng.png",
  "src/images/bgProjects/senagatApp.png",
  "src/images/bgProjects/terminal.png",
  "src/images/bgProjects/gumruk.png",
  "src/images/bgProjects/osusBank.png",
  "src/images/bgProjects/sinopec.png",
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
