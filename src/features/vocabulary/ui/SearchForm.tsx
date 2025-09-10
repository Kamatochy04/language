import { Input } from "@/shared/components";
import { PartOfSpeechTabs } from "@/widgets";

import styles from "./searchForm.module.scss";

function SearchForm() {
  return (
    <div className={styles.form}>
      <Input />
      <PartOfSpeechTabs />
    </div>
  );
}

export default SearchForm;
