import styles from "./dictionaryPage.module.scss";
import { DictionaryItem } from "@/widgets";
import { SearchForm } from "@/features";
import { Button } from "@/shared/components";

function DictionaryPage() {
  return (
    <div className={styles.dictionary}>
      <div className={styles.dictionary__header}>
        <h2 className={styles.dictionary__title}> Словарь</h2>
        <div className={styles.dictionary__test}>Начать тест</div>
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
        <Button className={styles.button}>Начать тест</Button>
        <div className={styles.sercle}>+</div>
      </div>
    </div>
  );
}

export default DictionaryPage;
