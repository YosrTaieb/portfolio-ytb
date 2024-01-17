import styles from "./Experiences.module.scss";

import Timeline from "../Timeline/Timeline"

function Experiences() {
  return (
    <section className={styles.experiences} id="Expériences">
      <Timeline />
    </section>
  )
}

export default Experiences