import { DropDown } from "@/shared/components";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import styles from "../userInfoForm.module.scss";
import { setStepsData } from "../../slice/steps.slice";

const DropdowmOptions = [
  { value: "", label: "Выберите уровень" },
  { value: "beginner", label: "Beginner (A1)" },
  { value: "elementary", label: "Elementary (A2)" },
  { value: "intermediate", label: "Intermediate (B1)" },
  { value: "upper-intermediate", label: "Upper-Intermediate (B2)" },
  { value: "advanced", label: "Advanced (C1)" },
  { value: "proficient", label: "Proficient (C2)" },
];

export function LanguageStep() {
  const { englishLevel } = useAppSelector((state) => state.userInfoStepsSlice);
  const dispathc = useAppDispatch();

  const handelChange = (value: string) => {
    dispathc(setStepsData({ englishLevel: value }));
  };

  return (
    <div className={styles.selectGroup}>
      <DropDown
        options={DropdowmOptions}
        placeholder="Выберите уровень"
        value={englishLevel}
        onSelect={handelChange}
      />
    </div>
  );
}
