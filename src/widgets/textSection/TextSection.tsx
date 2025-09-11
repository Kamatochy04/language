import React, { useState } from "react";
import styles from "./textSection.module.scss";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const mockText = `
  **A Day in London**  
  London is a vibrant city full of history and culture. Every morning, Sarah takes the Tube to work. She loves watching the bustling streets from the window. On weekends, she visits famous landmarks like Big Ben and the British Museum. Her favorite activity is walking along the Thames River, enjoying the beautiful views. London’s markets, like Borough Market, offer delicious food from all over the world. Sarah feels lucky to live in such an exciting place.
`;

const mockQuestions: Question[] = [
  {
    id: 1,
    question: "What does Sarah do every morning?",
    options: [
      "She drives to work.",
      "She takes the Tube to work.",
      "She walks to work.",
      "She cycles to work.",
    ],
    correctAnswer: "She takes the Tube to work.",
  },
  {
    id: 2,
    question: "What is Sarah’s favorite activity?",
    options: [
      "Visiting the British Museum.",
      "Eating at Borough Market.",
      "Walking along the Thames River.",
      "Watching movies.",
    ],
    correctAnswer: "Walking along the Thames River.",
  },
  {
    id: 3,
    question: "What does Sarah see from the Tube window?",
    options: [
      "The Thames River.",
      "Bustling streets.",
      "Big Ben.",
      "Borough Market.",
    ],
    correctAnswer: "Bustling streets.",
  },
];

const TextSection: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: boolean | null }>(
    {}
  );

  const handleAnswer = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
    setFeedback((prev) => ({
      ...prev,
      [questionId]:
        answer ===
        mockQuestions.find((q) => q.id === questionId)?.correctAnswer,
    }));
  };

  return (
    <div className={styles.lessonPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>A Day in London</h1>
        <p className={styles.subtitle}>
          Read the text and answer the questions below
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.textSection}>
          <div className={styles.textWrapper}>
            <p className={styles.text}>{mockText}</p>
          </div>
        </div>

        <div className={styles.questionsSection}>
          <h2 className={styles.sectionTitle}>Questions</h2>
          <div className={styles.questionsList}>
            {mockQuestions.map((question) => (
              <div key={question.id} className={styles.questionCard}>
                <h3 className={styles.questionText}>{question.question}</h3>
                <div className={styles.options}>
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      className={`${styles.optionButton} ${
                        selectedAnswers[question.id] === option
                          ? feedback[question.id] === true
                            ? styles.correct
                            : feedback[question.id] === false
                            ? styles.incorrect
                            : ""
                          : ""
                      }`}
                      onClick={() => handleAnswer(question.id, option)}
                      disabled={!!selectedAnswers[question.id]}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {feedback[question.id] !== undefined && (
                  <div className={styles.feedback}>
                    {feedback[question.id] ? (
                      <span className={styles.feedbackCorrect}>
                        Correct! Well done!
                      </span>
                    ) : (
                      <span className={styles.feedbackIncorrect}>
                        Incorrect. The correct answer is:{" "}
                        {question.correctAnswer}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
