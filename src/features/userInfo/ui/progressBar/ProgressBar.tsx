import { useAppSelector } from "@/app/store/hooks";
import { steps } from "../../assets/steps";
import styles from "../userInfoForm.module.scss";

export function ProgressBar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentStep } = useAppSelector((state) => state.StepsInfoSlice);
  return (
    <div className={styles.progressBar}>
      {steps.map((_, index) => (
        <div
          key={index}
          className={`${styles.progressStep} ${
            index < currentStep
              ? styles.completed
              : index === currentStep
              ? styles.active
              : ""
          }`}
        />
      ))}
    </div>
  );
}
