import React from "react";
import styles from "./oneGrammarPage.module.scss";

const OneGrammarPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Present Simple</h1>
        </div>
        <div className={styles.decorativeElement}></div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.block}>
          <h2 className={styles.title}> Example situation</h2>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            ipsam enim modi, voluptatum corrupti saepe quis ab. Dicta eius
            mollitia, alias obcaecati accusamus quidem suscipit tempora adipisci
            ducimus nemo quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempore eos fuga, soluta eius velit commodi sit
            deserunt incidunt atque veritatis iure nesciunt ab ducimus molestias
            fugiat amet quaerat. Numquam, deserunt.
          </p>
        </div>
        <div className={styles.block}>
          <h2 className={styles.title}> Example situation</h2>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            ipsam enim modi, voluptatum corrupti saepe quis ab. Dicta eius
            mollitia, alias obcaecati accusamus quidem suscipit tempora adipisci
            ducimus nemo quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempore eos fuga, soluta eius velit commodi sit
            deserunt incidunt atque veritatis iure nesciunt ab ducimus molestias
            fugiat amet quaerat. Numquam, deserunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OneGrammarPage;
