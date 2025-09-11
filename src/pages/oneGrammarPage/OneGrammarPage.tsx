import React from "react";
import styles from "./oneGrammarPage.module.scss";

const OneGrammarPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Present Simple</h1>
          <div className={styles.subtitle}>
            Master the basics of English grammar!
          </div>
        </div>
        <div className={styles.decorativeElement}></div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.ruleSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What is Present Simple?</h2>
          </div>
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>
              The Present Simple tense is used to describe habits, general
              truths, routines, and facts that are always or generally true.
              It's also used for scheduled events and to express feelings,
              opinions, or states.
            </p>
          </div>

          <div className={styles.line}>
            <div className={styles.block}>
              <h3 className={styles.title}> Example situation</h3>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                esse vitae sunt, sequi mollitia, ipsum perferendis nostrum vero
                aperiam alias iusto officia, labore dolore earum exercitationem
                distinctio quae quisquam nulla! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Laborum, mollitia laboriosam quia,
                voluptas maiores eum cumque quibusdam in dolore quo dolorum et!
                Eum soluta quaerat aspernatur dolore, quod cupiditate
                praesentium.
              </p>
            </div>
            <div className={styles.formulaSection}>
              <h3 className={styles.title}>Structure</h3>

              <div className={styles.formulaSection__content}>
                <div className={styles.formulaSection__contentBox}>
                  <p className={styles.formulaSection__contentTitle}>
                    Обычное предложение
                  </p>
                  <div className="">Пример предложения</div>
                </div>

                <div className={styles.formulaSection__contentBox}>
                  <p className={styles.formulaSection__contentTitle}>
                    Обычное предложение
                  </p>
                  <div className="">Пример предложения</div>
                </div>
                <div className={styles.formulaSection__contentBox}>
                  <p className={styles.formulaSection__contentTitle}>
                    Обычное предложение
                  </p>
                  <div className="">Пример предложения</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.use}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              How to Build Present Simple Sentences
            </h2>
            <div className={styles.sectionIcon}>✍️</div>
          </div>
          <div className={styles.useGrid}>
            {useExamples.map((item, index) => (
              <div key={index} className={styles.useCard}>
                <h3 className={styles.useType}>{item.type}</h3>
                <div className={styles.useStructure}>{item.structure}</div>
                <div className={styles.useExamples}>
                  {item.examples.map((example, idx) => (
                    <div key={idx} className={styles.useExample}>
                      <span className={styles.exampleDot}>•</span>
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className={styles.examplesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Examples</h2>
            <div className={styles.sectionIcon}>💡</div>
          </div>
          <div className={styles.examplesCarousel}>
            {examples.map((example, index) => (
              <div key={index} className={styles.exampleCard}>
                <div className={styles.sentenceWrapper}>
                  <span className={styles.sentenceQuote}>"</span>
                  <p className={styles.exampleSentence}>{example.sentence}</p>
                  <span className={styles.sentenceQuote}>"</span>
                </div>
                <div className={styles.exampleDescription}>
                  {example.description}
                </div>
                <div className={styles.exampleNumber}>{index + 1}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className={styles.tipsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Key Tips</h2>
            <div className={styles.sectionIcon}>⭐</div>
          </div>
          <div className={styles.tipsGrid}>
            {tips.map((tip, index) => (
              <div key={index} className={styles.tipItem}>
                <div className={styles.tipNumber}>{index + 1}</div>
                <div className={styles.tipText}>{tip}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* <div className={styles.footer}>
        <div className={styles.footerContent}>
          Practice makes perfect! Try creating your own sentences using Present
          Simple.
        </div>
        <div className={styles.decorativeLine}></div>
      </div> */}
    </div>
  );
};

export default OneGrammarPage;
