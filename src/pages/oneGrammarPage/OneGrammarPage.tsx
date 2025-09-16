import React from "react";
import styles from "./oneGrammarPage.module.scss";
import { ArrowRight } from "lucide-react";

const OneGrammarPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <article className={styles.article}>
        {/* Заголовок страницы */}
        <header className={styles.header}>
          <h1 className={styles.title}>Present Simple Tense</h1>
          <p className={styles.subtitle}>
            Правила и примеры употребления настоящего простого времени
          </p>
        </header>

        {/* Раздел: Введение */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Что такое Present Simple?</h2>
          <p className={styles.paragraph}>
            <span className={styles.highlight}>Present Simple</span> (настоящее
            простое время) используется для описания рутинных действий,
            привычек, общеизвестных фактов, расписаний и состояний. Это одно из
            самых базовых и часто используемых времен в английском языке.
          </p>
        </section>

        {/* Раздел: Формирование */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Формирование</h2>
          <h3 className={styles.subheading}>Утвердительные предложения</h3>
          <p className={styles.paragraph}>
            В утвердительных предложениях используется начальная форма глагола
            (инфинитив без 'to'). Для местоимений **He**, **She**, **It** к
            глаголу добавляется окончание **-s** или **-es**.
          </p>
          <div className={styles.exampleBlock}>
            <p>
              I / You / We / They <strong>work</strong> hard.
            </p>
            <p>
              He / She / It{" "}
              <strong>
                work<span className={styles.exceptionText}>s</span>
              </strong>{" "}
              hard.
            </p>
          </div>
        </section>

        {/* Раздел: Правила добавления -s/-es */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Правила добавления -s / -es</h2>
          <p className={styles.paragraph}>
            Окончание **-es** добавляется к глаголам, которые заканчиваются на:
          </p>
          <ul className={styles.list}>
            <li>
              <span className={styles.listHighlight}>
                -s, -ss, -sh, -ch, -x, -o
              </span>
              : pass <ArrowRight className={styles.arrowIcon} /> pass
              <span className={styles.listHighlight}>es</span>, watch{" "}
              <ArrowRight className={styles.arrowIcon} /> watch
              <span className={styles.listHighlight}>es</span>, go{" "}
              <ArrowRight className={styles.arrowIcon} /> go
              <span className={styles.listHighlight}>es</span>
            </li>
            <li>
              Глаголы на <span className={styles.listHighlight}>-y</span> после
              согласной: study <ArrowRight className={styles.arrowIcon} /> stud
              <span className={styles.listHighlight}>ies</span>
            </li>
          </ul>
        </section>

        {/* Раздел: Отрицательные и вопросительные предложения */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Отрицания и вопросы</h2>
          <p className={styles.paragraph}>
            Для формирования вопросов и отрицаний используется вспомогательный
            глагол **do** (для I/You/We/They) или **does** (для He/She/It).
          </p>
          <table className={styles.grammarTable}>
            <thead>
              <tr>
                <th>Тип предложения</th>
                <th>Форма</th>
                <th>Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>**Утверждение**</td>
                <td>Subject + Verb(-s/es)</td>
                <td>He reads books.</td>
              </tr>
              <tr>
                <td>**Отрицание**</td>
                <td>Subject + do/does not + Verb</td>
                <td>He does not read books.</td>
              </tr>
              <tr>
                <td>**Вопрос**</td>
                <td>Do/Does + Subject + Verb?</td>
                <td>Does he read books?</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.note}>
            <span className={styles.noteIcon}>💡</span> В вопросах и отрицаниях
            с **does**, окончание **-s/-es** у основного глагола не ставится!
          </p>
        </section>

        {/* Раздел: Употребление */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Когда использовать Present Simple?
          </h2>
          <ol className={styles.orderedList}>
            <li>
              <span className={styles.listItemText}>Привычки и рутина:</span> I
              drink coffee every morning.
            </li>
            <li>
              <span className={styles.listItemText}>Общеизвестные факты:</span>{" "}
              The Earth revolves around the Sun.
            </li>
            <li>
              <span className={styles.listItemText}>Расписание:</span> The train
              leaves at 7 PM.
            </li>
            <li>
              <span className={styles.listItemText}>Состояния:</span> She loves
              her dog.
            </li>
          </ol>
        </section>

        {/* Раздел: Исключения */}
        <section className={styles.section}>
          <div className={styles.exceptionBox}>
            <h3 className={styles.exceptionTitle}>Исключения и особенности</h3>
            <p className={styles.exceptionText}>
              Глагол **to be** (am/is/are) является исключением и не использует
              вспомогательный глагол **do/does**.
            </p>
            <p className={styles.exampleText}>I am a student. (Утверждение)</p>
            <p className={styles.exampleText}>
              I am not a student. (Отрицание)
            </p>
            <p className={styles.exampleText}>Am I a student? (Вопрос)</p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default OneGrammarPage;
