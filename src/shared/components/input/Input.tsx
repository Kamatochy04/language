import { useState, ComponentProps, FC } from "react";
import { inputVariant, InputVariant } from "./inputVariant";
import styles from "./input.module.scss";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

export type InputPropsType = ComponentProps<"input"> &
  InputVariant & {
    label?: string;
    errorText?: string;
  };

export const Input: FC<InputPropsType> = ({
  variant,
  label,
  type,
  errorText,
  ...props
}) => {
  const [inputType, setInputType] = useState<string>(type || "text");

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <label className={inputVariant({ variant })}>
      {label && <span className={styles.label}>{label}</span>}
      <input {...props} type={inputType} data-error={!!errorText} />
      {type === "password" && (
        <div className={styles.eye} onClick={togglePasswordVisibility}>
          {inputType === "password" ? (
            <EyeInvisibleOutlined />
          ) : (
            <EyeOutlined />
          )}
        </div>
      )}
      {errorText && <p className={styles.error__message}>{errorText}</p>}
    </label>
  );
};
