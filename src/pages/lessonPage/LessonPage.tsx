import { useState } from "react";
import styles from "./lessonPage.module.scss";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

function LessonPage() {
  const [showTranslation, setShowTranslation] = useState(false);
  const [grammarAnswer, setGrammarAnswer] = useState("");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  const quiz: QuizQuestion[] = [
    {
      id: 1,
      question: "Выбери правильное предложение:",
      options: [
        "He go to school every day",
        "He goes to school every day",
        "He going to school",
      ],
      correct: 1,
    },
    {
      id: 2,
      question: "Как правильно спросить о хобби?",
      options: ["What do you like?", "You like what?", "What are you like?"],
      correct: 0,
    },
  ];

  const handleQuizAnswer = (id: number, optionIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [id]: optionIndex }));
  };

  const checkQuiz = () => {
    let correctCount = 0;
    quiz.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) correctCount++;
    });
    alert(`Результат: ${correctCount} из ${quiz.length}`);
  };

  return (
    <div className={styles.lessonPage}>
      <h1>Занятие 1: Present Simple</h1>

      {/* Текст с переводом */}
      <section className={styles.section}>
        <h2>📖 Текст для чтения</h2>
        <p>
          Every morning I wake up at 7 o’clock. I have breakfast, usually eggs
          and coffee. Then I go to work by bus. In the evening I meet my friends
          or watch TV.
        </p>
        {showTranslation && (
          <p className={styles.translation}>
            Каждое утро я просыпаюсь в 7 часов. Я завтракаю, обычно ем яйца и
            пью кофе. Потом я еду на работу на автобусе. Вечером я встречаюсь с
            друзьями или смотрю телевизор.
          </p>
        )}
        <button onClick={() => setShowTranslation((p) => !p)}>
          {showTranslation ? "Скрыть перевод" : "Показать перевод"}
        </button>
      </section>

      {/* Словарь */}
      <section className={styles.section}>
        <h2>📝 Словарь</h2>
        <ul>
          <li>wake up — просыпаться</li>
          <li>breakfast — завтрак</li>
          <li>bus — автобус</li>
          <li>meet — встречать</li>
          <li>watch TV — смотреть телевизор</li>
        </ul>
      </section>

      {/* Грамматическое задание */}
      <section className={styles.section}>
        <h2>⚙️ Грамматика</h2>
        <p>
          Заполни пропуск:
          <br /> My brother ___ to school every day.
        </p>
        <input
          type="text"
          value={grammarAnswer}
          onChange={(e) => setGrammarAnswer(e.target.value)}
          placeholder="Введи слово"
        />
        {grammarAnswer.toLowerCase() === "goes" && (
          <p className={styles.correct}>✅ Верно!</p>
        )}
      </section>

      {/* Мини-тест */}
      <section className={styles.section}>
        <h2>🧩 Тест</h2>
        {quiz.map((q) => (
          <div key={q.id} className={styles.quizBlock}>
            <p>{q.question}</p>
            {q.options.map((opt, idx) => (
              <label key={idx} className={styles.option}>
                <input
                  type="radio"
                  name={`quiz-${q.id}`}
                  checked={quizAnswers[q.id] === idx}
                  onChange={() => handleQuizAnswer(q.id, idx)}
                />
                {opt}
              </label>
            ))}
          </div>
        ))}
        <button onClick={checkQuiz}>Проверить</button>
      </section>

      {/* Упражнение на говорение */}
      <section className={styles.section}>
        <h2>🎤 Задание на говорение</h2>
        <p>
          Опиши свой обычный день (2–3 предложения) используя Present Simple.
          Например: I wake up at 8. I go to university. I play football in the
          evening.
        </p>
      </section>

      {/* Завершение */}
      <section className={styles.section}>
        <button className={styles.finishBtn}>Завершить занятие</button>
      </section>
    </div>
  );
}

export default LessonPage;
