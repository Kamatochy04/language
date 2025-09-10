import { useState } from "react";
import styles from "./weeklyProgress.module.scss";

interface WeeklyProgressProps {
  vocabularyCount: number;
  grammarTopics: string[];
  skills: string[];
  testDetails: string;
}

function WeeklyProgress({
  vocabularyCount,
  grammarTopics,
  skills,
  testDetails,
}: WeeklyProgressProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.progressSection}>
      <div
        className={`${styles.progressPanel} ${
          !isVisible ? styles.collapsed : ""
        }`}
        onClick={toggleVisibility}
      >
        <div className={styles.progressHeader}>
          <h2 className={styles.progressTitle}>Ваш недельный план</h2>
          <span className={styles.closeIcon}>×</span>
        </div>
        {isVisible && (
          <div className={styles.progressDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Слов:</span>
              <span className={styles.detailValue}>{vocabularyCount}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Грамматика:</span>
              <div className={styles.detailContent}>
                {grammarTopics.map((topic, index) => (
                  <span key={index} className={styles.detailText}>
                    {topic}
                    {index < grammarTopics.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Навыки:</span>
              <div className={styles.detailContent}>
                {skills.map((skill, index) => (
                  <span key={index} className={styles.detailText}>
                    {skill}
                    {index < skills.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Тест:</span>
              <span className={styles.detailText}>{testDetails}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeeklyProgress;
