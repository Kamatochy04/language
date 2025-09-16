import styles from "./lessonPage.module.scss";

function LessonPage() {
  return (
    <div className={styles.lessonPageContainer}>
      {/* <h1 className={styles.title}>{lesson.title}</h1> */}
      <div className={styles.progress}>
        {/* <p>Упражнение {currentExerciseIndex + 1} из 2</p> */}
      </div>
      {/* {isLoading ? (
        <>Loading...</>
      ) : (
        <LessonRenderer
          type={data.type}
          content={data.content}
          onComplete={handleNextExercise}
        />
      )} */}
    </div>
  );
}

export default LessonPage;
