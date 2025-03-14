import React, { useContext } from "react";
import { createContext, useState } from "react";

interface IVacancyContext {
  vacancy: string;
  setVacancy: React.Dispatch<React.SetStateAction<string>>;
  details: boolean;
  setDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VacancyContext = createContext<IVacancyContext | undefined>(
  undefined
);

export const usevacancyContext = () => {
  const context = useContext(VacancyContext);
  if (!context) {
    throw new Error(
      "useStateContext должен использоваться внутри StateProvider"
    );
  }
  return context;
};

export const VacancyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [vacancy, setVacancy] = useState("all");
  const [details, setDetails] = useState(false);

  return (
    <VacancyContext.Provider
      value={{ vacancy, setVacancy, details, setDetails }}
    >
      {children}
    </VacancyContext.Provider>
  );
};
