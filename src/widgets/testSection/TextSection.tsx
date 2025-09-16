import React from "react";
import styles from "./LessonComponents.module.scss";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface TextContent {
  text: string;
  translation: string;
  questions: Question[];
}

interface TextSectionProps {
  content: TextContent;
}

const TextSection: React.FC<TextSectionProps> = ({ content }) => {
  // const [selectedAnswers, setSelectedAnswers] = useState<{
  //   [key: number]: string;
  // }>({});
  // const [feedback, setFeedback] = useState<{ [key: number]: boolean | null }>(
  //   {}
  // );

  // const handleAnswer = (questionIndex: number, answer: string) => {
  //   const question = content.questions[questionIndex];
  //   setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  //   setFeedback((prev) => ({
  //     ...prev,
  //     [questionIndex]: answer === question.correctAnswer,
  //   }));
  // };

  return (
    <div className={styles.lessonSection}>
      <h2>Text Comprehension</h2>
      <div className={styles.textContent}>
        {/* <p>{content.content.text}</p> */}
        <p className={styles.translation}>{content.translation}</p>
      </div>

      {/* <div className={styles.questionsContainer}>
        {content.content.questions.map((question, index) => (
          <div key={index} className={styles.questionCard}>
            <h3>{question.question}</h3>
            <div className={styles.options}>
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={`${styles.optionButton} ${
                    selectedAnswers[index] === option
                      ? feedback[index]
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  onClick={() => handleAnswer(index, option)}
                  disabled={selectedAnswers[index] !== undefined}
                >
                  {option}
                </button>
              ))}
            </div>
            {feedback[index] !== undefined && (
              <div className={styles.feedback}>
                {feedback[index] ? (
                  <span className={styles.feedbackCorrect}>Correct!</span>
                ) : (
                  <span className={styles.feedbackIncorrect}>
                    Incorrect. Correct answer: {question.correctAnswer}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default TextSection;
