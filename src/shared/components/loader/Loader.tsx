import ReactDOM from "react-dom";
import styles from "./loadre.module.scss";

export const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>,
    document.getElementById("root") as HTMLElement
  );
};
