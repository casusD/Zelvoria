import { createContext, useContext, useRef } from "react";

// Создаём контекст для передачи ref
const ScrollContext = createContext<{
  targetRef: React.RefObject<HTMLDivElement> | null;
}>({ targetRef: null });

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  return (
    <ScrollContext.Provider value={{ targetRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Хук для удобного использования контекста
export const useScrollContext = () => useContext(ScrollContext);
