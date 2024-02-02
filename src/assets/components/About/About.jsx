import styles from "./About.module.scss";
import profile from "../../img/png/profile-pic.png";
import cv_icon from "../../img/svg/icone_cv.svg";
import signature from "../../img/svg/signature.svg";
import cv from "../../img/pdf/CV_YosrTaieb.pdf";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className={styles.home} id="Accueil">
      <div className={styles.home__container}>
        <div className={styles.home__card}>
          {/* <h1 className={styles.home__title}>Bonjour, Yosr TAIEB</h1> */}
          <div className={styles.home__logo}>
            <img src={signature} alt="signature Yosr Taieb" />
          </div>
          <h2 className={styles.home__subtitle}>Front-End développeuse</h2>
          <p className={styles.home__description}>
            En juin 2021, j'ai saisi l'opportunité de me reconvertir
            professionnellement vers le développement web. Cette transition a
            été marquée par une formation intensive de 5 mois, suivie d'un stage
            de 6 mois. Au cours de cette période, j'ai consolidé mes compétences
            en programmation, notamment dans les langages HTML, CSS et
            Javascript. Grâce à mes expériences professionnelles antérieures,
            j'ai acquis la capacité à respecter des délais serrés tout en
            maintenant une organisation efficace dans mon travail. Rigoureuse et
            capable de travailler sous pression, je suis motivée à rejoindre une
            équipe spécialisée en informatique afin de mettre en pratique mes
            compétences et contribuer au succès des projets.
          </p>

          <Link to="/Contact">
            <button className={styles.home__btn}>Contactez-moi</button>
          </Link>
        </div>
        <div className={styles.home__rightSection}>
          <div className={styles.home__img}>
            <img src={profile} alt="photo de profil" />
          </div>
          <div className={styles.home__socialNetwork}>
            <a href="https://github.com/YosrTaieb" target="_blank">
              <VscGithubAlt />
            </a>

            <a
              href="https://www.linkedin.com/in/yosr-taieb-ytb/"
              target="_blank"
            >
              <CiLinkedin />
            </a>
            <a href={cv} target="_blank" className={styles.home__cva}>
              <img
                className={styles.home__cv}
                src={cv_icon}
                alt="icone de cv"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
