import styles from "../userInfoForm.module.scss";

type StepsProps = {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
};

export function Steps({ icon, title, content }: StepsProps) {
  return (
    <div className={`${styles.stepContent} ${styles.fadeIn}`}>
      <div className={styles.stepHeader}>
        {icon}
        <h2>{title}</h2>
      </div>
      {content}
    </div>
  );
}
