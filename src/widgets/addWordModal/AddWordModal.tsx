import React, { useState } from "react";
import styles from "./addWordModal.module.scss";
import { useAddWordMutation } from "@/features/vocabulary/api/vocabulary.api";

interface Example {
  sentence: string;
}

interface AddWordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddWordModal: React.FC<AddWordModalProps> = ({ isOpen, onClose }) => {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [examples, setExamples] = useState<Example[]>([{ sentence: "" }]);
  const [addWord] = useAddWordMutation();

  const handleAddExample = () => {
    setExamples([...examples, { sentence: "" }]);
  };

  const handleExampleChange = (index: number, value: string) => {
    const newExamples = [...examples];
    newExamples[index].sentence = value;
    setExamples(newExamples);
  };

  const handleRemoveExample = (index: number) => {
    if (examples.length > 1) {
      setExamples(examples.filter((_, i) => i !== index));
    }
  };

  const handleSave = async () => {
    if (word && translation) {
      try {
        await addWord({
          word,
          // examples: examples.map((ex) => ex.sentence).filter((s) => s.trim()),
        }).unwrap();
        setWord("");
        setTranslation("");
        setExamples([{ sentence: "" }]);
        onClose();
      } catch (error) {
        console.error("Ошибка при добавлении слова:", error);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.modalHeader}>Добавить новое слово</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.inputSection}>
            <h3 className={styles.sectionTitle}>Слово и перевод</h3>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Слово (на английском)</label>
              <input
                type="text"
                className={styles.inputField}
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Введите слово"
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Перевод</label>
              <input
                type="text"
                className={styles.inputField}
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
                placeholder="Введите перевод"
              />
            </div>
          </div>

          <div className={styles.examplesSection}>
            <h3 className={styles.sectionTitle}>Примеры использования</h3>
            {examples.map((example, index) => (
              <div key={index} className={styles.exampleGroup}>
                <input
                  type="text"
                  className={styles.inputField}
                  value={example.sentence}
                  onChange={(e) => handleExampleChange(index, e.target.value)}
                  placeholder={`Пример ${index + 1}`}
                />
                {examples.length > 1 && (
                  <button
                    className={styles.removeExampleButton}
                    onClick={() => handleRemoveExample(index)}
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
            <button
              className={styles.addExampleButton}
              onClick={handleAddExample}
            >
              + Добавить пример
            </button>
          </div>
        </div>

        <button
          className={styles.saveButton}
          onClick={handleSave}
          disabled={!word || !translation}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default AddWordModal;
