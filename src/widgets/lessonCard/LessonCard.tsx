import { useNavigate } from "react-router-dom";
import styles from "./lessonCard.module.scss";
import { Button } from "@/shared/components";

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
  expandedLesson: string | null;
  handleToggle: (id: string) => void;
  firstUncompletedLesson?: { id: string } | undefined;
}

function LessonCard({
  lesson,
  expandedLesson,
  handleToggle,
  firstUncompletedLesson,
}: LessonCardProps) {
  const navigate = useNavigate();
  return (
    <li
      key={lesson.id}
      className={`${styles.lessonCard} ${styles[`week${lesson.week}`]}`}
    >
      <div
        className={styles.lessonHeader}
        onClick={() => handleToggle(lesson.id)}
      >
        <span className={styles.lessonTitle}>{lesson.title}</span>
        <span className={styles.toggleIcon}>
          {expandedLesson === lesson.id ? "▲" : "▼"}
        </span>
      </div>
      {expandedLesson === lesson.id && (
        <div className={styles.lessonContent}>
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
            disabled={lesson.id !== firstUncompletedLesson?.id}
          >
            Начать урок
          </Button>
        </div>
      )}
    </li>
  );
}

export default LessonCard;
