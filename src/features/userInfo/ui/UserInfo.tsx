import React from "react";

import { steps } from "../assets/steps";
import { Steps } from "./stepsSection/StepsSection";
import { NavigationStep } from "./navigation/NavigationSteps";
import { ProgressBar } from "./progressBar/ProgressBar";
import { useAppSelector } from "@/app/store/hooks";

import styles from "./userInfoForm.module.scss";

export const LearningPlanForm: React.FC = () => {
  const { currentStep } = useAppSelector((state) => state.StepsInfoSlice);

  return (
    <div className={styles.container}>
      <ProgressBar />

      <Steps
        icon={steps[currentStep].icon}
        title={steps[currentStep].title}
        content={steps[currentStep].content}
      />

      <NavigationStep />
    </div>
  );
};

export default LearningPlanForm;
