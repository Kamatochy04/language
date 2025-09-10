import { FC, ReactNode } from "react";

import styles from "./containe.module.scss";

type ContainerProps = {
  children: ReactNode;
  classname?: string;
};

export const Container: FC<ContainerProps> = ({ children, classname }) => {
  return <div className={`${styles.container} ${classname}`}>{children}</div>;
};
