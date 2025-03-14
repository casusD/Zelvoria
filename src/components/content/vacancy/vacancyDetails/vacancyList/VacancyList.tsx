import Navigation from "../../../../header/Navigation";
import { usevacancyContext } from "../../VacancyContext";
import Details from "../details/Details";
import Card from "../vacancyCard/Card";
import styles from "./VacancyList.module.scss";

const VacancyList = () => {
  const { details } = usevacancyContext();

  return (
    <section className={styles.vacancyList}>
      <Navigation />
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "#47C176",
          marginLeft: "5rem",
        }}
      >
        <img
          style={{ margin: "0", padding: "0" }}
          src="src\images\pngtree-green-tick-checkbox-vector-illustration-isolated-on-white-background-png-image_5000203 1.png"
          alt="#"
        />
        Ваша заявка принята. Мы скоро свяжемся с вами!
      </div> */}
      <div>{!details ? <Card /> : <Details />}</div>
    </section>
  );
};

export default VacancyList;
