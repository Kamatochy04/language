import React from "react";
import styles from "./LessonComponents.module.scss";

interface Word {
  english: string;
  russian: string;
  options: string[];
  correctAnswer: string;
}

interface VocabularyContent {
  words: Word[];
}

interface VocabularySectionProps {
  content: VocabularyContent;
}

const VocabularySection: React.FC<VocabularySectionProps> = () => {
  // const [selectedAnswers, setSelectedAnswers] = useState<{
  //   [key: number]: string;
  // }>({});
  // const [feedback, setFeedback] = useState<{ [key: number]: boolean | null }>(
  //   {}
  // );

  // const handleAnswer = (wordIndex: number, answer: string) => {
  //   const word = content.words[wordIndex];
  //   setSelectedAnswers((prev) => ({ ...prev, [wordIndex]: answer }));
  //   setFeedback((prev) => ({
  //     ...prev,
  //     [wordIndex]: answer === word.correctAnswer,
  //   }));
  // };

  return (
    <div className={styles.lessonSection}>
      <h2>Vocabulary Practice</h2>
      <p>Match the English words with their correct Russian translations.</p>
      {/* <div className={styles.questionsContainer}>
        {content.content.words.map((word, index) => (
          <div key={index} className={styles.questionCard}>
            <h3>{word.english}</h3>
            <div className={styles.options}>
              {word.options.map((option, optionIndex) => (
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
                    Incorrect. Correct answer: {word.correctAnswer}
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

export default VocabularySection;
