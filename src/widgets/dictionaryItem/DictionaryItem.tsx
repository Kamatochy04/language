import styles from "./dictionaryItem.module.scss";

interface Word {
  id: string;
  word: string;
  transcription: string;
  translation: string;
  partOfSpeech: string;
  examples: string[];
}

interface DictionaryItemProps {
  word: Word;
  onClick: (word: Word) => void;
}

function DictionaryItem({ word, onClick }: DictionaryItemProps) {
  return (
    <div className={styles.dictionaryItem} onClick={() => onClick(word)}>
      <span className={styles.wordText}>{word.word}</span>
      <span className={styles.partOfSpeech}>{word.partOfSpeech}</span>
      <span className={styles.translation}>{word.translation}</span>
    </div>
  );
}

export default DictionaryItem;
