import { BookOpen, Home, Library, BarChart2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import styles from "./Aside.module.scss";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>LinguaPlan</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <Home size={20} />
              <span>Главная</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grammar"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <BookOpen size={20} />
              <span>Грамматика</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dictionary"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <Library size={20} />
              <span>Словарь</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <BarChart2 size={20} />
              <span>Статистика</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
