import { useParams } from "react-router-dom";
import styles from "./grammarDetailsPage.module.scss";

const grammarDetails: Record<number, any> = {
  1: {
    title: "Present Simple",
    rule: "Present Simple используется для описания привычек, фактов и регулярных действий.",
    examples: [
      "I go to school every day.",
      "She works in an office.",
      "Water boils at 100°C.",
    ],
    image: "https://i.imgur.com/HTb4j9j.png",
    exercise: "Напиши 3 предложения о себе в Present Simple.",
  },
  2: {
    title: "Past Simple",
    rule: "Past Simple описывает завершённые действия в прошлом.",
    examples: [
      "I visited Paris last year.",
      "She watched a movie yesterday.",
      "They played football on Sunday.",
    ],
    image: "https://i.imgur.com/2Q3LZcP.png",
    exercise: "Напиши 3 предложения о том, что ты делал вчера.",
  },
  3: {
    title: "Articles",
    rule: "Articles (a, an, the) используются для определения существительных.",
    examples: ["I have a dog.", "She bought an apple.", "The sun is shining."],
    image: "https://i.imgur.com/pv4Sm6h.png",
    exercise: "Составь 5 предложений с артиклями a/an/the.",
  },
};

function GrammarDetailsPage() {
  const { id } = useParams();
  const topic = grammarDetails[Number(id)];

  if (!topic) return <p>Тема не найдена</p>;

  return (
    <div className={styles.details}>
      <h1>{topic.title}</h1>
      <p className={styles.rule}>{topic.rule}</p>

      <h2>Примеры:</h2>
      <ul>
        {topic.examples.map((ex: string, idx: number) => (
          <li key={idx}>{ex}</li>
        ))}
      </ul>

      <div className={styles.imageBlock}>
        <img src={topic.image} alt={topic.title} />
      </div>

      <h2>Задание:</h2>
      <p>{topic.exercise}</p>
    </div>
  );
}

export default GrammarDetailsPage;
