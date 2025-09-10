import { useState } from "react";
import styles from "./DictionaryPage.module.scss";
import { DictionaryItem } from "@/widgets";
import { SearchForm } from "@/features";

interface Word {
  id: string;
  word: string;
  transcription: string;
  translation: string;
  partOfSpeech: string;
  examples: string[];
}

function DictionaryPage() {
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);

  // Тестовые данные
  const words = [
    {
      id: "1",
      word: "walk",
      transcription: "/wɔːk/",
      translation: "идти",
      partOfSpeech: "глагол",
      examples: [
        "I walk to school every day.",
        "She walks in the park with her dog.",
        "We will walk together tomorrow.",
      ],
    },
    {
      id: "2",
      word: "happy",
      transcription: "/ˈhæpi/",
      translation: "счастливый",
      partOfSpeech: "прилагательное",
      examples: [
        "He feels happy after the good news.",
        "The children are happy to play outside.",
        "She looks happy in the photo.",
      ],
    },
    {
      id: "3",
      word: "book",
      transcription: "/bʊk/",
      translation: "книга",
      partOfSpeech: "существительное",
      examples: [
        "I read a book last night.",
        "This book is about history.",
        "He borrowed a book from the library.",
      ],
    },
    {
      id: "4",
      word: "run",
      transcription: "/rʌn/",
      translation: "бежать",
      partOfSpeech: "глагол",
      examples: [
        "They run in the morning.",
        "She runs faster than her brother.",
        "We will run to catch the bus.",
      ],
    },
  ];

  const handleWordClick = (word: Word) => {
    setSelectedWord(word);
  };

  const handleClose = () => {
    setSelectedWord(null);
  };

  return (
    <div className={styles.dictionary}>
      <h1>📚 Словарь</h1>

      <div className={styles.filters}>
        <SearchForm />
      </div>

      <div className={styles.wordList}>
        {words.length > 0 ? (
          words.map((word) => (
            <DictionaryItem
              key={word.id}
              word={word}
              onClick={handleWordClick}
            />
          ))
        ) : (
          <p className={styles.noResults}>Ничего не найдено</p>
        )}
      </div>

      {selectedWord && (
        <div className={styles.wordDetails}>
          <div className={styles.detailsHeader}>
            <h2>{selectedWord.word}</h2>
            <span className={styles.closeButton} onClick={handleClose}>
              ×
            </span>
          </div>
          <div className={styles.detailsContent}>
            <p>
              <strong>Транскрипция:</strong> {selectedWord.transcription}
            </p>
            <p>
              <strong>Часть речи:</strong> {selectedWord.partOfSpeech}
            </p>
            <p>
              <strong>Перевод:</strong> {selectedWord.translation}
            </p>
            <p>
              <strong>Примеры использования:</strong>
            </p>
            <ul className={styles.exampleList}>
              {selectedWord.examples.map((example, index) => (
                <li key={index} className={styles.exampleItem}>
                  {example}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default DictionaryPage;
