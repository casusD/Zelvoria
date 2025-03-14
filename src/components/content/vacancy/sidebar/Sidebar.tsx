import styles from "./Sidebar.module.scss";
import { usevacancyContext } from "../VacancyContext";

const Sidebar = () => {
  const { vacancy, setVacancy, setDetails } = usevacancyContext();

  return (
    <aside className={styles.sidebar}>
      <h1>Vacancy</h1>
      <div className={styles.vacList}>
        <h3
          onClick={() => {
            setVacancy("all");
            setDetails(false);
          }}
          className={vacancy == "all" ? styles.active : ""}
        >
          All Vacancies
        </h3>
        <h3
          onClick={() => {
            setVacancy("Zeronto");
            setDetails(false);
          }}
          className={vacancy == "Zeronto" ? styles.active : ""}
        >
          Zeronto
        </h3>
        <h3
          onClick={() => {
            setVacancy("Vexora");
            setDetails(false);
          }}
          className={vacancy == "Vexora" ? styles.active : ""}
        >
          Vexora
        </h3>
        <h3
          onClick={() => {
            setVacancy("Lunexis");
            setDetails(false);
          }}
          className={vacancy == "Lunexis" ? styles.active : ""}
        >
          Lunexis
        </h3>
        <h3
          onClick={() => {
            setVacancy("Brizora");
            setDetails(false);
          }}
          className={vacancy == "Brizora" ? styles.active : ""}
        >
          Brizora
        </h3>
        <h3
          onClick={() => {
            setVacancy("Terniq");
            setDetails(false);
          }}
          className={vacancy == "Terniq" ? styles.active : ""}
        >
          Terniq
        </h3>
        <h3
          onClick={() => {
            setVacancy("Sylox");
            setDetails(false);
          }}
          className={vacancy == "Sylox" ? styles.active : ""}
        >
          Sylox
        </h3>
        <h3
          onClick={() => {
            setVacancy("Xelvora");
            setDetails(false);
          }}
          className={vacancy == "Xelvora" ? styles.active : ""}
        >
          Xelvora
        </h3>
        <h3
          onClick={() => {
            setVacancy("Dravex");
            setDetails(false);
          }}
          className={vacancy == "Dravex" ? styles.active : ""}
        >
          Dravex
        </h3>
      </div>
    </aside>
  );
};

export default Sidebar;
