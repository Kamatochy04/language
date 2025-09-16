import styles from "./mainPage.module.scss";
import { LessonCard } from "@/widgets";
import { useGetLessonsQuery } from "@/features/lesson/api/lesson.api";

function MainPage() {
  const { data } = useGetLessonsQuery({ page: 1, limit: 10 });

  return (
    <div className={styles.content}>
      <ul className={styles.lessons}>
        {data?.lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
