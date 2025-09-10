import { useNavigate } from "react-router-dom";
import styles from "./grammarPage.module.scss";

interface GrammarTopic {
  id: number;
  title: string;
  description: string;
}

const grammarTopics: GrammarTopic[] = [
  {
    id: 1,
    title: "Present Simple",
    description: "Используется для привычек, фактов и регулярных действий.",
  },
  {
    id: 2,
    title: "Past Simple",
    description: "Описывает действия, которые произошли в прошлом.",
  },
  {
    id: 3,
    title: "Articles (a, an, the)",
    description: "Определённые и неопределённые артикли.",
  },
];

function GrammarPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.grammarPage}>
      <h1>📖 Моя грамматика</h1>
      <div className={styles.cards}>
        {grammarTopics.map((topic) => (
          <div
            key={topic.id}
            className={styles.card}
            onClick={() => navigate(`/grammar/${topic.id}`)}
          >
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GrammarPage;
