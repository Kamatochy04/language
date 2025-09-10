import React from "react";
import { Link } from "react-router-dom";
import styles from "./taskCard.module.scss";

const TaskCard: React.FC = () => {
  const testData = {
    title: "Настроить Wi-Fi роутер",
    description:
      "Нужно настроить роутер TP-Link в квартире. Не работает интернет после переезда. Готов угостить кофе!",
    district: "Москва, Тверской",
    reward: "Кофе или 300 руб.",
    userNickname: "Alex_92",
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src="https://blog.eldorado.ru/storage/publication/0/49/e899Iuhya2glRTHl4SeFrUYq6pKjc61Nrr7yLppX.png"
          alt={testData.title}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{testData.title}</h3>
        <p className={styles.description}>{testData.description}</p>
        <div className={styles.meta}>
          <span className={styles.district}>Район: {testData.district}</span>
          <span className={styles.reward}>
            Вознаграждение: {testData.reward}
          </span>
          <span className={styles.user}>Автор: {testData.userNickname}</span>
        </div>
        <Link to={`/chat/${testData.userNickname}`} className={styles.button}>
          Написать пользователю
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
