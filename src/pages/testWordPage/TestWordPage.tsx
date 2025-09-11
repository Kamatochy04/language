import React, { useState, useEffect } from "react";
import styles from "./testWordPage.module.scss";
import { useNavigate } from "react-router-dom";

interface Word {
  word: string;
  translation: string;
  example: string;
}

const testData: Word[] = [
  { word: "Apple", translation: "Яблоко", example: "She ate a juicy apple." },
  {
    word: "Book",
    translation: "Книга",
    example: "He read a fascinating book.",
  },
  { word: "Run", translation: "Бежать", example: "They run every morning." },
  { word: "House", translation: "Дом", example: "Their house is cozy." },
  {
    word: "Sun",
    translation: "Солнце",
    example: "The sun shines brightly today.",
  },
];

const TestPage: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const navigate = useNavigate();

  const generateOptions = (correctTranslation: string) => {
    const allTranslations = testData.map((item) => item.translation);
    const wrongOptions = allTranslations
      .filter((t) => t !== correctTranslation)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const newOptions = [...wrongOptions, correctTranslation].sort(
      () => Math.random() - 0.5
    );
    setOptions(newOptions);
  };

  useEffect(() => {
    generateOptions(testData[currentWordIndex].translation);
  }, [currentWordIndex]);

  const handleAnswer = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    const correct = option === testData[currentWordIndex].translation;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setTotalAnswered(totalAnswered + 1);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    const nextIndex = Math.floor(Math.random() * testData.length);
    setCurrentWordIndex(nextIndex);
  };

  const handleFinish = () => {
    setIsFinished(true);
  };

  const handleRestart = () => {
    setIsFinished(false);
    setScore(0);
    setTotalAnswered(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setCurrentWordIndex(Math.floor(Math.random() * testData.length));
  };

  const currentWord = testData[currentWordIndex];

  if (isFinished) {
    return (
      <div className={styles.testContainer}>
        <h2 className={styles.testHeader}>Тест завершен</h2>
        <div className={styles.resultCard}>
          <span className={styles.resultText}>Ваш результат:</span>
          <span className={styles.resultScore}>
            {score} правильных из {totalAnswered}
          </span>
          <span className={styles.resultPercentage}>
            {totalAnswered > 0
              ? `${Math.round((score / totalAnswered) * 100)}%`
              : "0%"}
          </span>
        </div>
        <button className={styles.restartButton} onClick={handleRestart}>
          Начать заново
        </button>
        <button className={styles.restartButton} onClick={() => navigate("/")}>
          Вернуться назад
        </button>
      </div>
    );
  }

  return (
    <div className={styles.testContainer}>
      <h2 className={styles.testHeader}>Тест на знание слов</h2>
      <div className={styles.score}>
        Счет: {score} / {totalAnswered}
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.questionSection}>
          <h3 className={styles.sectionTitle}>Выберите перевод</h3>
          <div className={styles.wordCard}>
            <span className={styles.word}>{currentWord.word}</span>
          </div>
          <div className={styles.options}>
            {options.map((option, index) => (
              <button
                key={index}
                className={`${styles.optionButton} ${
                  selectedOption === option
                    ? isCorrect
                      ? styles.correct
                      : styles.incorrect
                    : ""
                }`}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.feedbackSection}>
          <h3 className={styles.sectionTitle}>Результат</h3>
          {isCorrect !== null && (
            <div className={styles.feedbackCard}>
              <span className={styles.feedbackText}>
                {isCorrect ? "Правильно!" : "Неправильно!"}
              </span>
              <span className={styles.correctAnswer}>
                Правильный перевод: {currentWord.translation}
              </span>
              <span className={styles.example}>
                Пример: {currentWord.example}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        {selectedOption && (
          <button className={styles.nextButton} onClick={handleNext}>
            Следующий вопрос
          </button>
        )}
        <button className={styles.finishButton} onClick={handleFinish}>
          Завершить тест
        </button>
      </div>
    </div>
  );
};

export default TestPage;
