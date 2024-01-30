import styles from "./Timeline.module.scss";
import "../Timeline/Timeline.css";

import { Chrono } from "react-chrono";
import data from "./data";

function Timeline() {
  return (
    <section className={styles.timeline}>
      <div className={styles.timeline_description}>
        <h2 className={styles.timeline_title}>Mon parcours professionnel</h2>
        <p className={styles.timeline_details}>
          Découvrez mon parcours professionnel, une histoire où chaque étape a
          forgé ma passion et affiné mes compétences.
        </p>
      </div>
      <div style={{ width: "80%", height: "60%" }}>
        <Chrono
          items={data}
          mode="HORIZONTAL"
          cardWidth={750}
          cardHeight={150}
          contentDetailsHeight={150}
          fontSizes={{
            title: "1.5rem",
            cardTitle: "1.4rem",
            cardSubtitle: "1rem",
            cardText: "1rem",
          }}
          classNames={{
            card: "my-card",
            cardMedia: "my-card-media",
            cardSubTitle: "my-card-subtitle",
            cardText: "my-card-text",
            cardTitle: "my-card-title",
            controls: "my-controls",
            title: "my-title",
          }}
        />
      </div>
    </section>
  );
}

export default Timeline;
