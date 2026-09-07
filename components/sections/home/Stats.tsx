import styles from "./Home.module.css";

const stats = [
  { label: "Years of Experience", value: "20+" },
  { label: "Countries Supported", value: "9" },
  { label: "Core Patents", value: "17" },
  { label: "Approach", value: "Field-First" },
];

export default function Stats() {
  return (
    <div className={styles.statsSection}>
      <dl className={`${styles.container} ${styles.stats}`}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
