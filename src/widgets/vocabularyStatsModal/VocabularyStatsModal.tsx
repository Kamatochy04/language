import styles from "./vocabularyStatsModal.module.scss";

interface VocabularyStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTest: () => void;
}

function VocabularyStatsModal({
  isOpen,
  onClose,
  onStartTest,
}: VocabularyStatsModalProps) {
  const stats = {
    totalWords: 1000,
    knownWords: 600,
    wordsToLearn: 400,
    partsOfSpeech: {
      nouns: 300,
      verbs: 250,
      adjectives: 200,
      adverbs: 150,
      others: 100,
    },
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <h2 className={styles.modalHeader}>Статистика вашего словаря</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.statsSection}>
            <h3>Общая статистика</h3>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Всего слов</span>
              <span className={styles.statValue}>{stats.totalWords}</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Известные слова</span>
              <span className={styles.statValue}>{stats.knownWords}</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${(stats.knownWords / stats.totalWords) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Слова для изучения</span>
              <span className={styles.statValue}>{stats.wordsToLearn}</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${(stats.wordsToLearn / stats.totalWords) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className={styles.partsOfSpeech}>
            <h3>Части речи</h3>
            <ul className={styles.posList}>
              <li className={styles.posItem}>
                <span>Существительные:</span>
                <span>{stats.partsOfSpeech.nouns}</span>
              </li>
              <li className={styles.posItem}>
                <span>Глаголы:</span>
                <span>{stats.partsOfSpeech.verbs}</span>
              </li>
              <li className={styles.posItem}>
                <span>Прилагательные:</span>
                <span>{stats.partsOfSpeech.adjectives}</span>
              </li>
              <li className={styles.posItem}>
                <span>Наречия:</span>
                <span>{stats.partsOfSpeech.adverbs}</span>
              </li>
              <li className={styles.posItem}>
                <span>Другие:</span>
                <span>{stats.partsOfSpeech.others}</span>
              </li>
            </ul>
          </div>
        </div>

        <button className={styles.startTestButton} onClick={onStartTest}>
          Начать тест
        </button>
      </div>
    </div>
  );
}

export default VocabularyStatsModal;
