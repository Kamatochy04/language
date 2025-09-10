import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

interface HeaderProps {
  isAuthenticated: boolean;
  userNickname?: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  userNickname,
  onLogout,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>NeighborFix</span>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li>
              <Link
                to="/"
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/tasks"
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Задачи
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </Link>
            </li>
          </ul>
        </nav>

        {/* Действия */}
        <div className={styles.actions}>
          <a
            href="https://t.me/NeighborFixBot"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.telegramButton}
          >
            <span className={styles.telegramText}>Telegram</span>
          </a>

          {isAuthenticated ? (
            <div className={styles.userMenu}>
              <span className={styles.userNickname}>{userNickname}</span>
              <button onClick={onLogout} className={styles.logoutButton}>
                Выйти
              </button>
            </div>
          ) : (
            <Link to="/login" className={styles.loginButton}>
              Войти
            </Link>
          )}

          {/* Гамбургер-меню для мобильных */}
          <button
            className={`${styles.hamburger} ${
              isMenuOpen ? styles.hamburgerOpen : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
