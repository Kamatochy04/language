import { useState, ComponentProps, FC } from "react";
import { inputVariant, InputVariant } from "./inputVariant";

import styles from "./input.module.scss";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

export type InputPropsType = ComponentProps<"input"> &
  InputVariant & {
    label?: string;
<<<<<<< HEAD
=======
    isError?: boolean;
>>>>>>> e75aba1f74a52c66e97ce7baae36eec88a4a4b1d
    errorText?: string;
  };

export const Input: FC<InputPropsType> = ({
  variant,
  label,
  type,
  errorText,
<<<<<<< HEAD
=======
  isError = false,
>>>>>>> e75aba1f74a52c66e97ce7baae36eec88a4a4b1d
  ...props
}) => {
  const [inputType, setInputType] = useState<string>(type || "text");

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <label className={inputVariant({ variant })}>
      <span className={styles.label}>{label}</span>
      <input
        {...props}
        type={inputType}
        data-error={errorText ? true : false}
      />
      {type === "password" ? (
        <div className={styles.eye} onClick={togglePasswordVisibility}>
          {inputType === "password" ? (
            <EyeInvisibleOutlined />
          ) : (
            <EyeOutlined />
          )}
        </div>
      ) : null}
      <p className={styles.error__message}>{errorText}</p>
    </label>
  );
};
