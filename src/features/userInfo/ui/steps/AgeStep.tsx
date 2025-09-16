import { Input } from "@/shared/components";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setStepsData } from "../../slice/steps.slice";

import styles from "../userInfoForm.module.scss";

export function AgeStep() {
  const { age } = useAppSelector((state) => state.userInfoStepsSlice);
  const dispatch = useAppDispatch();

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = event.target.value;
    dispatch(setStepsData({ age: newAge }));
  };
  return (
    <div className={styles.inputGroup}>
      <Input
        type="number"
        placeholder="Введите ваш возраст"
        value={age}
        onChange={handleAgeChange}
        className={styles.input}
        min="1"
        max="120"
      />
    </div>
  );
}
