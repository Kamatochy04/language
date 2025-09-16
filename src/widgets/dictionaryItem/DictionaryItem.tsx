import styles from "./dictionaryItem.module.scss";
type DictionaryItemProps = {
  word: string;
  ru_word: string;
};

function DictionaryItem({ word, ru_word }: DictionaryItemProps) {
  return (
    <div className={styles.dictionaryItem}>
      <div className={styles.wordText}>{word}</div>
      <div className={styles.translation}> {ru_word}</div>
    </div>
  );
}

export default DictionaryItem;
