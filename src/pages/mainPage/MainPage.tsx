import styles from "./mainPage.module.scss";
import { LessonCard, WeeklyProgress } from "@/widgets";

interface Lesson {
  id: string;
  title: string;
  week: number;
  content: string;
  duration: string;
  type: string;
  tips: string;
  completed: boolean;
}

function MainPage() {
  const lessons: Lesson[] = [
    {
      id: "lesson1",
      title: "Урок 1: Основы Present Simple",
      week: 1,
      content:
        "Изучите структуру Present Simple (Subject + Verb + Object). Примеры: I walk, She reads.",
      duration: "30 мин",
      type: "Грамматика",
      tips: "Повторяйте примеры вслух для лучшего запоминания.",
      completed: false,
    },
    {
      id: "lesson2",
      title: "Урок 2: Present Continuous в действии",
      week: 1,
      content:
        "Освойте Present Continuous (am/is/are + Verb-ing). Примеры: I am walking, They are playing.",
      duration: "35 мин",
      type: "Грамматика",
      tips: "Практикуйте с друзьями для улучшения навыков.",
      completed: false,
    },
    {
      id: "lesson3",
      title: "Урок 3: Прошедшее время Past Simple",
      week: 2,
      content:
        "Изучите Past Simple (Verb + -ed или 2-я форма). Примеры: I walked, He ate.",
      duration: "40 мин",
      type: "Грамматика",
      tips: "Используйте дневник для записи пройденного.",
      completed: false,
    },
    {
      id: "test1",
      title: "Тест: Итоговое закрепление",
      week: 2,
      content:
        "Пройдите тест на все изученные темы. Включает 20 вопросов и оценку прогресса.",
      duration: "25 мин",
      type: "Тест",
      tips: "Проверьте знания перед началом теста.",
      completed: false,
    },
  ];

  const weeklyProgressData = {
    vocabularyCount: 120,
    grammarTopics: ["Present Simple", "Present Continuous", "Past Simple"],
    skills: ["Описывать свой день", "Действия сейчас", "События в прошлом"],
    testDetails: "Итоговый тест с 20 вопросами и оценкой прогресса",
  };

  return (
    <div className={styles.content}>
      <WeeklyProgress
        vocabularyCount={weeklyProgressData.vocabularyCount}
        grammarTopics={weeklyProgressData.grammarTopics}
        skills={weeklyProgressData.skills}
        testDetails={weeklyProgressData.testDetails}
      />
      <ul className={styles.lessons}>
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
