import { ArrowLeft, ArrowRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { steps } from "../../assets/steps";
import { nextStep, prevStep } from "../../slice/stepsInfo.slice";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/components";

import styles from "../userInfoForm.module.scss";

export function NavigationStep() {
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector((state) => state.StepsInfoSlice);

  const navigate = useNavigate();
  const handleBack = () => {
    dispatch(prevStep());
  };

  const handleNext = () => {
    console.log(currentStep);
    if (currentStep >= 3) {
      navigate("/");
    } else {
      dispatch(nextStep());
    }
  };

  return (
    <div className={styles.navigation}>
      {currentStep > 0 && (
        <Button onClick={handleBack} className={styles.backButton}>
          <ArrowLeft size={18} /> Назад
        </Button>
      )}
      <Button onClick={handleNext} className={styles.nextButton}>
        {currentStep === steps.length - 1 ? "Создать план" : "Далее"}
        <ArrowRight size={18} />
      </Button>
    </div>
  );
}
