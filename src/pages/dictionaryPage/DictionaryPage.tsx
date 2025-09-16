import styles from "./dictionaryPage.module.scss";
import { AddWordModal, DictionaryItem, VocabularyStatsModal } from "@/widgets";
import { SearchForm } from "@/features";
import { Button } from "@/shared/components";
import { useState } from "react";
import { useGetAllwordsQuery } from "@/features/vocabulary/api/vocabulary.api";
import { useAppSelector } from "@/app/store/hooks";

function DictionaryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddWord, setIsAddWord] = useState(false);
  const { isLoading } = useGetAllwordsQuery();
  const { words } = useAppSelector((state) => state.vocabularySlice);

  return (
    <div className={styles.dictionary}>
      <VocabularyStatsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <AddWordModal isOpen={isAddWord} onClose={() => setIsAddWord(false)} />
      <div className={styles.dictionary__header}>
        <h2 className={styles.dictionary__title}>Словарь</h2>
      </div>

      <div className={styles.filters}>
        <SearchForm />
      </div>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.wordList}>
          {words.map((item) => (
            <DictionaryItem
              key={item.id}
              word={item.word}
              ru_word={item.translation}
            />
          ))}
        </div>
      )}

      <div className={styles.footer}>
        <Button className={styles.button} onClick={() => setIsOpen(true)}>
          Начать тест
        </Button>
        <div className={styles.sercle} onClick={() => setIsAddWord(true)}>
          +
        </div>
      </div>
    </div>
  );
}

export default DictionaryPage;
