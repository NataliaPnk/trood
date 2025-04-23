import React from "react";
import { Link } from "react-router-dom";
import s from "../NavMenu/index.module.css";

export default function NavMenu() {
  return (
    <nav className={s.nav}>
      <Link to="/">Main page</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/vacancies">Vacancies</Link>
      <Link to="/people">People</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}
