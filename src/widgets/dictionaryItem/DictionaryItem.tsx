import styles from "./dictionaryItem.module.scss";

function DictionaryItem() {
  return (
    <div className={styles.dictionaryItem}>
      <div className={styles.wordText}>English</div>
      <div className={styles.translation}> Русский</div>
    </div>
  );
}

export default DictionaryItem;
