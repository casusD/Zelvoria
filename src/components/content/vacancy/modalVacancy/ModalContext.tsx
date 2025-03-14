import React, { useContext } from "react";
import { createContext, useState } from "react";

export type LangType = "en" | "ru";

interface IModalContext {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  lang: LangType;
  setLang: React.Dispatch<React.SetStateAction<LangType>>;
}

export const ModalContext = createContext<IModalContext | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useStateContext должен использоваться внутри StateProvider"
    );
  }
  return context;
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false);
  const [lang, setLang] = useState<LangType>("en");

  return (
    <ModalContext.Provider value={{ modal, setModal, lang, setLang }}>
      {children}
    </ModalContext.Provider>
  );
};
