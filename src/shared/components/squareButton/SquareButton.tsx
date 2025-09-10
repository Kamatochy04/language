import { ComponentProps, FC } from "react";

import styles from "./button.module.scss";

type SquareButtonType = ComponentProps<"button"> & {
  className?: string;
  text: string;
};

export const SquareButton: FC<SquareButtonType> = ({
  className,
  text,
  ...props
}) => {
  return (
    <button {...props} className={`${className} ${styles.button} `}>
      <p>{text}</p>
    </button>
  );
};
