import styles from "./LessonComponents.module.scss";

const GrammarSection = () => {
  // const handleAnswer = (sentenceIndex: number, answer: string) => {
  //   const sentence = content.sentences[sentenceIndex];
  //   setSelectedAnswers((prev) => ({ ...prev, [sentenceIndex]: answer }));
  //   setFeedback((prev) => ({
  //     ...prev,
  //     [sentenceIndex]: answer === sentence.correctAnswer,
  //   }));
  // };

  return (
    <div className={styles.lessonSection}>
      <h2>Grammar Practice</h2>
      <p>Choose the correct word to complete each sentence.</p>
      {/* <div className={styles.questionsContainer}>
        {content.content.content.sentences.map((sentence, index) => {
          const parts = sentence.sentence.split("_______");
          return (
            <div key={index} className={styles.questionCard}>
              <h3 className={styles.sentenceText}>
                {parts[0]}
                <span className={styles.blank}>_______</span>
                {parts[1]}
              </h3>
              <div className={styles.options}>
                {sentence.words.map((word, wordIndex) => (
                  <button
                    key={wordIndex}
                    className={`${styles.optionButton} ${
                      selectedAnswers[index] === word
                        ? feedback[index]
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    onClick={() => handleAnswer(index, word)}
                    disabled={selectedAnswers[index] !== undefined}
                  >
                    {word}
                  </button>
                ))}
              </div>
              {feedback[index] !== undefined && (
                <div className={styles.feedback}>
                  {feedback[index] ? (
                    <span className={styles.feedbackCorrect}>Correct!</span>
                  ) : (
                    <span className={styles.feedbackIncorrect}>
                      Incorrect. Correct answer: {sentence.correctAnswer}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div> */}
      {/* {isCompleted && (
        <div className={styles.nextButtonContainer}>
          <Button onClick={handleNext}>Следующее упражнение</Button>
        </div>
      )}
      <div className={styles.nextButtonContainer}>
        <Button onClick={handleNext}>Следующее упражнение</Button>
      </div> */}
    </div>
  );
};

export default GrammarSection;
