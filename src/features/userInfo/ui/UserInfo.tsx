import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  User,
  Clock,
  BarChart,
  Target,
} from "lucide-react";
import styles from "./userInfoForm.module.scss";

interface FormData {
  age: string;
  englishLevel: string;
  timePerDay: string;
  goals: string[];
}

const LearningPlanForm: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    age: "",
    englishLevel: "",
    timePerDay: "",
    goals: [],
  });

  useEffect(() => {
    const savedData = localStorage.getItem("learningPlan");
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  const goalsOptions = [
    { value: "travel", label: "Путешествия" },
    { value: "work", label: "Работа/Бизнес" },
    { value: "study", label: "Учеба" },
    { value: "hobby", label: "Хобби/Развлечения" },
    { value: "relocation", label: "Переезд" },
    { value: "other", label: "Другое" },
  ];

  const steps = [
    {
      title: "Ваш возраст",
      icon: <User size={24} />,
      content: (
        <div className={styles.inputGroup}>
          <input
            type="number"
            placeholder="Введите ваш возраст"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className={styles.input}
            min="1"
            max="120"
          />
        </div>
      ),
    },
    {
      title: "Текущий уровень английского",
      icon: <BarChart size={24} />,
      content: (
        <div className={styles.selectGroup}>
          <select
            value={formData.englishLevel}
            onChange={(e) =>
              setFormData({ ...formData, englishLevel: e.target.value })
            }
            className={styles.select}
          >
            <option value="">Выберите уровень</option>
            <option value="beginner">Beginner (A1)</option>
            <option value="elementary">Elementary (A2)</option>
            <option value="intermediate">Intermediate (B1)</option>
            <option value="upper-intermediate">Upper-Intermediate (B2)</option>
            <option value="advanced">Advanced (C1)</option>
            <option value="proficient">Proficient (C2)</option>
          </select>
        </div>
      ),
    },
    {
      title: "Время в день на изучение",
      icon: <Clock size={24} />,
      content: (
        <div className={styles.buttonGroup}>
          {["15 мин", "30 мин", "45 мин", "1 час", "1.5 часа", "2+ часа"].map(
            (time) => (
              <button
                key={time}
                className={`${styles.timeButton} ${
                  formData.timePerDay === time ? styles.active : ""
                }`}
                onClick={() => setFormData({ ...formData, timePerDay: time })}
              >
                {time}
              </button>
            )
          )}
        </div>
      ),
    },
    {
      title: "Цели изучения",
      icon: <Target size={24} />,
      content: (
        <div className={styles.tabGroup}>
          {goalsOptions.map((goal) => (
            <button
              key={goal.value}
              className={`${styles.tab} ${
                formData.goals.includes(goal.value) ? styles.activeTab : ""
              }`}
              onClick={() => {
                const newGoals = formData.goals.includes(goal.value)
                  ? formData.goals.filter((g) => g !== goal.value)
                  : [...formData.goals, goal.value];
                setFormData({ ...formData, goals: newGoals });
              }}
            >
              {goal.label}
            </button>
          ))}
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save to localStorage and redirect
      localStorage.setItem("learningPlan", JSON.stringify(formData));
      navigate("/");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.age !== "";
      case 1:
        return formData.englishLevel !== "";
      case 2:
        return formData.timePerDay !== "";
      case 3:
        return formData.goals.length > 0;
      default:
        return true;
    }
  };

  return (
    <div className={styles.container}>
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

      <div className={`${styles.stepContent} ${styles.fadeIn}`}>
        <div className={styles.stepHeader}>
          {steps[currentStep].icon}
          <h2>{steps[currentStep].title}</h2>
        </div>
        {steps[currentStep].content}
      </div>

      <div className={styles.navigation}>
        {currentStep > 0 && (
          <button onClick={handleBack} className={styles.backButton}>
            <ArrowLeft size={18} /> Назад
          </button>
        )}
        <button
          onClick={handleNext}
          className={styles.nextButton}
          disabled={!isStepValid()}
        >
          {currentStep === steps.length - 1 ? "Создать план" : "Далее"}{" "}
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default LearningPlanForm;
