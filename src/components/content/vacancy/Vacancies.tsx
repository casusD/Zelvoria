import Footer from "../../footer/Footer";
import { useModalContext } from "./modalVacancy/ModalContext";
import ModalVacancy from "./modalVacancy/ModalVacancy";
import Sidebar from "./sidebar/Sidebar";
import styles from "./Vacancies.module.scss";
import { VacancyProvider } from "./VacancyContext";
import VacancyList from "./vacancyDetails/vacancyList/VacancyList";

const Vacancies = () => {
  const { modal } = useModalContext();

  return (
    <VacancyProvider>
      <main>
        {modal && <ModalVacancy />}

        <section className={styles.vacancy}>
          <Sidebar />
          <VacancyList />
        </section>
        <Footer />
      </main>
    </VacancyProvider>
  );
};

export default Vacancies;
