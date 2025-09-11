import { useNavigate } from "react-router-dom";
import styles from "./lessonCard.module.scss";
import { Button } from "@/shared/components";
import { useState } from "react";

interface LessonCardProps {
  lesson: {
    id: string;
    title: string;
    week: number;
    content: string;
    duration: string;
    type: string;
    tips: string;
    completed: boolean;
  };
}

function LessonCard({ lesson }: LessonCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <li
      key={lesson.id}
      onClick={() => setIsOpen(!isOpen)}
      className={`${styles.lessonCard}  ${styles[`week${lesson.week}`]}`}
    >
      <div className={styles.lessonHeader}>
        <span className={styles.lessonTitle}>{lesson.title}</span>
      </div>
      <div className={`${isOpen ? styles.active : ""} ${styles.lessonContent}`}>
        <div className={styles.lessonDetails}>
          <p className={styles.lessonText}>{lesson.content}</p>
          <div className={styles.lessonMeta}>
            <span className={styles.metaItem}>
              Продолжительность: {lesson.duration}
            </span>
            <span className={styles.metaItem}>Тип: {lesson.type}</span>
            <span className={styles.metaItem}>Советы: {lesson.tips}</span>
          </div>
        </div>
        <Button
          className={styles.startButton}
          onClick={() => navigate("/adasdas")}
        >
          Начать урок
        </Button>
      </div>
    </li>
  );
}

export default LessonCard;
