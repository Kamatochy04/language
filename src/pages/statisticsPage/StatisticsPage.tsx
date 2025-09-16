import React from "react";
import {
  BarChart2,
  TrendingUp,
  Clock,
  Layers,
  CheckCircle,
} from "lucide-react";
import styles from "./statisticsPage.module.scss";

interface StatsData {
  lessonsCompleted: number;
  currentLevel: string;
  topicsLearned: string[];
  totalStudyTime: number; // in minutes
  totalDaysStudied: number;
  averageDailyTime: number; // in minutes
  goalsAchieved: string[];
  streak: number;
  studyLog: { date: string; minutes: number }[];
}

const mockStats: StatsData = {
  lessonsCompleted: 85,
  currentLevel: "B2",
  topicsLearned: [
    "Present Simple",
    "Past Simple",
    "Present Perfect",
    "Modal Verbs",
    "Conditional Sentences",
    "Passive Voice",
  ],
  totalStudyTime: 2500, // 41 hours, 40 minutes
  totalDaysStudied: 55,
  averageDailyTime: 45,
  goalsAchieved: [
    "Improved conversational fluency for work",
    "Completed intermediate grammar course",
    "Mastered travel vocabulary",
  ],
  streak: 15,
  studyLog: [
    { date: "2024-05-01", minutes: 30 },
    { date: "2024-05-02", minutes: 45 },
    { date: "2024-05-03", minutes: 60 },
    { date: "2024-05-04", minutes: 15 },
    { date: "2024-05-05", minutes: 50 },
    { date: "2024-05-06", minutes: 20 },
    { date: "2024-05-07", minutes: 75 },
    { date: "2024-05-08", minutes: 30 },
    { date: "2024-05-09", minutes: 40 },
    { date: "2024-05-10", minutes: 55 },
    { date: "2024-05-11", minutes: 25 },
    { date: "2024-05-12", minutes: 60 },
    { date: "2024-05-13", minutes: 80 },
    { date: "2024-05-14", minutes: 35 },
    { date: "2024-05-15", minutes: 40 },
  ],
};

const formatTime = (minutes: number): string => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
};

const StatisticsPage: React.FC = () => {
  const {
    lessonsCompleted,
    currentLevel,
    topicsLearned,
    totalStudyTime,
    goalsAchieved,
  } = mockStats;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <BarChart2 size={28} className={styles.titleIcon} />
        Your Learning Dashboard
      </h1>

      <div className={styles.mainStatsGrid}>
        <div className={styles.statCard}>
          <CheckCircle size={24} className={styles.icon} />
          <h2>Lessons Completed</h2>
          <p className={styles.value}>{lessonsCompleted}</p>
          <p className={styles.description}>
            Total number of finished lessons.
          </p>
        </div>

        <div className={styles.statCard}>
          <TrendingUp size={24} className={styles.icon} />
          <h2>Current Level</h2>
          <p className={styles.value}>{currentLevel}</p>
          <p className={styles.description}>Your current proficiency level.</p>
        </div>

        <div className={styles.statCard}>
          <Clock size={24} className={styles.icon} />
          <h2>Total Study Time</h2>
          <p className={styles.value}>{formatTime(totalStudyTime)}</p>
          <p className={styles.description}>
            Time spent on your learning journey.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Layers size={24} className={styles.sectionIcon} />
          Learning Highlights
        </h2>
        <div className={styles.highlightsGrid}>
          <div className={styles.statCard}>
            <h2>Topics Mastered</h2>
            <ul className={styles.list}>
              {topicsLearned.length > 0 ? (
                topicsLearned.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))
              ) : (
                <li>No topics learned yet.</li>
              )}
            </ul>
          </div>

          <div className={styles.statCard}>
            <h2>Goals Achieved</h2>
            <ul className={styles.list}>
              {goalsAchieved.length > 0 ? (
                goalsAchieved.map((goal, index) => <li key={index}>{goal}</li>)
              ) : (
                <li>No goals achieved yet.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
