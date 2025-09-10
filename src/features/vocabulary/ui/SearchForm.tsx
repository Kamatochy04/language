import { Input } from "@/shared/components";
// import styles from "./SearchForm.module.scss";
import { PartOfSpeechTabs } from "@/widgets";

function SearchForm() {
  return (
    <div>
      <Input />
      <PartOfSpeechTabs />
    </div>
  );
}

export default SearchForm;
