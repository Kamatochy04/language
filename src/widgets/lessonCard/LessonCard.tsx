import { useNavigate } from "react-router-dom";
import styles from "./lessonCard.module.scss";

interface LessonMeta {
  id: string;
  title: string;
  type: string;
}

interface LessonCardProps {
  lesson: LessonMeta;
}

function LessonCard({ lesson }: LessonCardProps) {
  const navigate = useNavigate();

  const handleStartLesson = () => {
    navigate(`/lessons/${lesson.id}`);
  };

  return (
    <li
      key={lesson.id}
      onClick={handleStartLesson}
      className={styles.lessonCard}
    >
      <div className={styles.lessonHeader}>
        <span className={styles.lessonTitle}>{lesson.title}</span>
      </div>
      <div className={styles.lessonContent}>
        <div className={styles.lessonDetails}>
          <div className={styles.lessonMeta}>
            <span className={styles.metaItem}>Тип: {lesson.type}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default LessonCard;
