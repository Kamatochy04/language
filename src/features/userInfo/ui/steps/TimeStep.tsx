import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import styles from "../userInfoForm.module.scss";
import { setStepsData } from "../../slice/steps.slice";

export function TimeStep() {
  const { timePerDay } = useAppSelector((state) => state.userInfoStepsSlice);
  const dispatch = useAppDispatch();

  const handelClick = (time: string) => {
    dispatch(setStepsData({ timePerDay: time }));
  };

  return (
    <div className={styles.buttonGroup}>
      {["15 мин", "30 мин", "45 мин", "1 час", "1.5 часа", "2+ часа"].map(
        (time) => (
          <button
            key={time}
            className={`${styles.timeButton} ${
              timePerDay === time ? styles.active : ""
            }`}
            onClick={() => handelClick(time)}
          >
            {time}
          </button>
        )
      )}
    </div>
  );
}
