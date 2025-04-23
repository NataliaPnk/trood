import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import PeoplePage from "./pages/PeoplePage";
import ProjectsPage from "./pages/ProjectsPage";
import SettingsPage from "./pages/SettingsPage";
import TestsPage from "./pages/TestsPage";
import VacanciesPage from "./pages/VacanciesPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <NavMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/vacancies" element={<VacanciesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
