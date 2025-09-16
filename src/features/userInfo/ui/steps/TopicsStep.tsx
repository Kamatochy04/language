import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import styles from "../userInfoForm.module.scss";
import { setStepsData } from "../../slice/steps.slice";

const goalsOptions = [
  { value: "travel", label: "Путешествия" },
  { value: "work", label: "Работа/Бизнес" },
  { value: "study", label: "Учеба" },
  { value: "hobby", label: "Хобби/Развлечения" },
  { value: "relocation", label: "Переезд" },
  { value: "other", label: "Другое" },
];

export function TopicStep() {
  const { favoriteTopics } = useAppSelector(
    (state) => state.userInfoStepsSlice
  );
  const dispatch = useAppDispatch();

  const handelClick = (value: string) => {
    const newTopics = favoriteTopics.includes(value)
      ? favoriteTopics.filter((topic) => topic !== value)
      : [...favoriteTopics, value];

    dispatch(setStepsData({ favoriteTopics: newTopics }));
  };

  return (
    <div className={styles.tabGroup}>
      {goalsOptions.map((goal) => (
        <button
          key={goal.value}
          className={`${styles.tab} ${
            favoriteTopics.includes(goal.value) ? styles.activeTab : ""
          }`}
          onClick={() => {
            handelClick(goal.value);
          }}
        >
          {goal.label}
        </button>
      ))}
    </div>
  );
}
