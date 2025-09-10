import { useState } from "react";
import styles from "./genderTabs.module.scss";

const options = [
  { id: "male", label: "Мужской" },
  { id: "female", label: "Женский" },
  { id: "none", label: "Не указывать" },
];

function GenderTabs() {
  const [selected, setSelected] = useState("none");

  return (
    <div className={styles.tabs}>
      {options.map((opt) => (
        <div
          key={opt.id}
          className={`${styles.tab} ${
            selected === opt.id ? styles.active : ""
          }`}
          onClick={() => setSelected(opt.id)}
        >
          {opt.label}
        </div>
      ))}
    </div>
  );
}

export default GenderTabs;
