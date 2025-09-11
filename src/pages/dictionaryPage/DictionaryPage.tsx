import styles from "./dictionaryPage.module.scss";
import { AddWordModal, DictionaryItem, VocabularyStatsModal } from "@/widgets";
import { SearchForm } from "@/features";
import { Button } from "@/shared/components";
import { useState } from "react";

function DictionaryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddWord, setIsAddWord] = useState(false);
  return (
    <div className={styles.dictionary}>
      <VocabularyStatsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onStartTest={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <AddWordModal
        isOpen={isAddWord}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
        onSave={function (): void {
          setIsAddWord(false);
        }}
      />
      <div className={styles.dictionary__header}>
        <h2 className={styles.dictionary__title}> Словарь</h2>
      </div>

      <div className={styles.filters}>
        <SearchForm />
      </div>

      <div className={styles.wordList}>
        <DictionaryItem />
        <DictionaryItem />
        <DictionaryItem />
        <DictionaryItem />
        <DictionaryItem />
        <DictionaryItem />
        <DictionaryItem />
        <DictionaryItem />
      </div>
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
