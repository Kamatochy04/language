import { ComponentProps, FC } from "react";

import styles from "./button.module.scss";

type ButtonPropsType = ComponentProps<"button"> & {
  children: React.ReactNode;
  className?: string;
};

export const Button: FC<ButtonPropsType> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`${className} ${styles.button}`}>
      {children}
    </button>
  );
};
