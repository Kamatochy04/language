import React from "react";
import { BarChart2, CheckCircle, Clock, BookOpen } from "lucide-react";
import styles from "./StatisticsPage.module.scss";

interface StatsData {
  lessonsCompleted: number;
  topicsLearned: string[];
  totalStudyTime: number;
  averageDailyTime: number;
  goalsAchieved: string[];
}

const mockStats: StatsData = {
  lessonsCompleted: 25,
  topicsLearned: [
    "Present Simple",
    "Past Simple",
    "Present Perfect",
    "Modal Verbs",
  ],
  totalStudyTime: 1500, // 1500 minutes (25 hours)
  averageDailyTime: 45, // 45 minutes per day
  goalsAchieved: [
    "Improved vocabulary for travel",
    "Completed beginner grammar course",
  ],
};

const StatisticsPage: React.FC = () => {
  const {
    lessonsCompleted,
    topicsLearned,
    totalStudyTime,
    averageDailyTime,
    goalsAchieved,
  } = mockStats;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <BarChart2 size={28} className={styles.titleIcon} />
        Your Learning Statistics
      </h1>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <CheckCircle size={24} className={styles.icon} />
          <h2>Lessons Completed</h2>
          <p className={styles.value}>{lessonsCompleted}</p>
          <p className={styles.description}>
            Total lessons you’ve successfully completed.
          </p>
        </div>
        <div className={styles.statCard}>
          <BookOpen size={24} className={styles.icon} />
          <h2>Topics Learned</h2>
          <ul className={styles.list}>
            {topicsLearned.length > 0 ? (
              topicsLearned.map((topic, index) => <li key={index}>{topic}</li>)
            ) : (
              <li>No topics learned yet.</li>
            )}
          </ul>
          <p className={styles.description}>
            Grammar and vocabulary topics mastered.
          </p>
        </div>
        <div className={styles.statCard}>
          <Clock size={24} className={styles.icon} />
          <h2>Total Study Time</h2>
          <p className={styles.value}>
            {Math.floor(totalStudyTime / 60)}h {totalStudyTime % 60}m
          </p>
          <p className={styles.description}>Total time spent studying.</p>
        </div>
        <div className={styles.statCard}>
          <Clock size={24} className={styles.icon} />
          <h2>Average Daily Time</h2>
          <p className={styles.value}>{averageDailyTime}m</p>
          <p className={styles.description}>
            Average time spent studying per day.
          </p>
        </div>
        <div className={styles.statCard}>
          <CheckCircle size={24} className={styles.icon} />
          <h2>Goals Achieved</h2>
          <ul className={styles.list}>
            {goalsAchieved.length > 0 ? (
              goalsAchieved.map((goal, index) => <li key={index}>{goal}</li>)
            ) : (
              <li>No goals achieved yet.</li>
            )}
          </ul>
          <p className={styles.description}>
            Learning goals you’ve accomplished.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
