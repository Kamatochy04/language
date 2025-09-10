import styles from "./partOfSpeechTabs.module.scss";

function PartOfSpeechTabs() {
  const partsOfSpeech = [
    "Все",
    "Глагол",
    "Существительное",
    "Прилагательное",
    "Наречие",
  ];

  return (
    <div className={styles.tabsContainer}>
      {partsOfSpeech.map((part) => (
        <button key={part} className={`${styles.tab}`} onClick={() => {}}>
          {part}
        </button>
      ))}
    </div>
  );
}

export default PartOfSpeechTabs;
