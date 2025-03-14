import React from "react";
import styles from "./Button.module.scss";

interface IButton {
  children: React.ReactNode;
  func?: () => void;
}

const Button = ({ children, func }: IButton) => {
  return (
    <button onClick={func} className={styles.generalBtn}>
      {children}
    </button>
  );
};

export default Button;
