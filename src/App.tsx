import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Bereket from "./components/content/aboutUs/Bereket/Bereket";
import RysgallyYupek from "./components/content/aboutUs/RysgallyYupek/RysgallyYupek";
import { ModalProvider } from "./components/content/vacancy/modalVacancy/ModalContext";
import MainPage from "./components/content/main/MainPage/MainPage";
import Vacancies from "./components/content/vacancy/Vacancies";
import AboutUs from "./components/content/aboutUs/AboutUS";
import Atm from "./components/content/aboutUs/Atm/Atm";
import TurkmenToleg from "./components/content/aboutUs/TurkmenToleg/TurkmenToleg";
import BoyaDag from "./components/content/aboutUs/BoyaDag/BoyaDag";
import Entrepreneur from "./components/content/aboutUs/Entrepreneur/Entrepreneur";
import { ScrollProvider } from "./components/content/main/MainPage/ScrollContext";

function App() {
  return (
    <ModalProvider>
      <ScrollProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/Zeronto" element={<Atm />} />
            <Route path="/Vexora" element={<Bereket />} />
            <Route path="/Lunexis" element={<RysgallyYupek />} />
            <Route path="/Brizora" element={<TurkmenToleg />} />
            <Route path="/Terniq" element={<BoyaDag />} />
            <Route path="Xelvora" element={<Entrepreneur />} />
          </Routes>
        </BrowserRouter>
      </ScrollProvider>
    </ModalProvider>
  );
}

export default App;
