import styles from "./Experiences.module.scss";

import Timeline from "../Timeline/Timeline"

function Experiences() {
  return (
    <section className={styles.experiences}>
      <Timeline />
    </section>
  )
}

export default Experiences