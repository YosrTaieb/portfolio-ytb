import styles from "./Footer.module.scss";
import { FiLinkedin, FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footer__socialNetwork}>
        <a href="https://github.com/YosrTaieb" target="_blank">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/yosr-taieb-ytb/" target="_blank">
          <FiLinkedin />
        </a>
      </div>
      <div>
        <span>Copyright © 2024 Made with ♥ by Yosr Taieb</span>
      </div>
    </footer>
  );
}

export default Footer;
