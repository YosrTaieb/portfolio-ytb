import styles from "./Contact.module.scss";
import { CiPhone } from "react-icons/ci";
// import { IoMailOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function Contact() {
  return (
    <section className={styles.contact} id="Contact">
      <div className={styles.contact_description}>
        <h2 className={styles.contact_title}>Contactez-moi</h2>
        <p className={styles.contact_details}>
          Si vous avez des questions, des commentaires ou si vous souhaitez
          discuter de projets passionnants, n'hésitez pas à me contacter. Je
          suis ouverte à de nouvelles opportunités de collaboration et
          d'échange.
        </p>
      </div>
      <div className={styles.contact_container}>
        <div className={styles.contact_card}>
          <CiLocationOn className={styles.contact_icon} />
          <div>
            <p className={styles.contact_info}>1120 Bruxelles</p>
          </div>
        </div>
        <div className={styles.contact_card}>
          <CiPhone className={styles.contact_icon} />
          <div>
            <p className={styles.contact_info}>+32 484 138 501</p>
          </div>
        </div>
        <div className={styles.contact_card}>
          <CiMail className={styles.contact_icon} />
          <div>
            <a
              className={styles.contact_info}
              href="mailto:yosr.taieb@gmail.com"
              target="_blank"
            >
              yosr.taieb@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
