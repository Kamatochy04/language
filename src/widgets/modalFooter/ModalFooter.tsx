import { useLocation, useNavigate } from "react-router-dom";
import styles from "./modalFooter.module.scss";

function ModalFooter() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", icon: "🏠", label: "Главная" },
    { path: "/dictionary", icon: "📖", label: "Словарь" },
    { path: "/grammar", icon: "✍️", label: "Грамматика" },
    { path: "/statistics", icon: "📊", label: "Статистика" },
  ];

  const handleNavigation = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <div className={styles.modalFooter}>
      {navItems.map((item) => (
        <button
          key={item.path}
          className={`${styles.navButton} ${
            location.pathname === item.path ? styles.active : ""
          }`}
          onClick={() => handleNavigation(item.path)}
          aria-label={item.label}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

export default ModalFooter;
