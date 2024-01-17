import styles from "./Projects.module.scss";
import mkm from "../../img/png/mkm.png";
import gk from "../../img/png/gk.png";
import gjt from "../../img/png/gjt.png";

function Projects() {
  return (
    <section className={styles.projects} id="Projets">
      <div className={styles.projects_description}>
      <h2 className={styles.projects_title}>Mes projets</h2>
      <p className={styles.projects_subtitle}>Parcourez mes réalisations accomplies en Wordpress :</p>
      </div>
      <div className={styles.projects_container}>
        <div className={styles.item}>
          <div className={styles.team_data_img}>
            <a href="https://mkmcleaning.be" target="_blank">
              <div className={styles.single_work}>
                <img
                  src={mkm}
                  alt="MKM Cleaning"
                  className={styles.img_responsive}
                  data-no-retina
                />
                <div className={styles.overlay_text}>
                  <div className={styles.cases_image_inner}>
                    <span
                      className={`${styles.cases_line} ${styles.top}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.top_right}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.bottom}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.bottom_left}`}
                    ></span>
                    <h5>MKM Cleaning</h5>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.team_data_img}>
            <a href="https://gk-yourpartner.be" target="_blank">
              <div className={styles.single_work}>
                <img
                  src={gk}
                  alt="GK Your Partner"
                  className={styles.img_responsive}
                  data-no-retina
                />
                <div className={styles.overlay_text}>
                  <div className={styles.cases_image_inner}>
                    <span
                      className={`${styles.cases_line} ${styles.top}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.top_right}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.bottom}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.bottom_left}`}
                    ></span>
                    <h6>GK Your Partner</h6>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.team_data_img}>
            <a href="https://grenierjanetony.be" target="_blank">
              <div className={styles.single_work}>
                <img
                  src={gjt}
                  alt="Grenier Jane Tony"
                  className={styles.img_responsive}
                  data-no-retina
                />
                <div className={styles.overlay_text}>
                  <div className={styles.cases_image_inner}>
                    <span
                      className={`${styles.cases_line} ${styles.top}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.top_right}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.bottom}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.bottom_left}`}
                    ></span>
                    <h6>Grenier Jane Tony</h6>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.projects_description}>
      <p className={styles.projects_subtitle}>Parcourez mes projets accomplies en HTML / CSS / JS :</p>
      </div>
      {/* <div className={styles.projects_container}>
        <div className={styles.item}>
          <div className={styles.team_data_img}>
            <a href="https://mkmcleaning.be" target="_blank">
              <div className={styles.single_work}>
                <img
                  src={mkm}
                  alt="MKM Cleaning"
                  className={styles.img_responsive}
                  data-no-retina
                />
                <div className={styles.overlay_text}>
                  <div className={styles.cases_image_inner}>
                    <span
                      className={`${styles.cases_line} ${styles.top}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.top_right}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.bottom}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.bottom_left}`}
                    ></span>
                    <h5>MKM Cleaning</h5>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.team_data_img}>
            <a href="https://gk-yourpartner.be" target="_blank">
              <div className={styles.single_work}>
                <img
                  src={gk}
                  alt="GK Your Partner"
                  className={styles.img_responsive}
                  data-no-retina
                />
                <div className={styles.overlay_text}>
                  <div className={styles.cases_image_inner}>
                    <span
                      className={`${styles.cases_line} ${styles.top}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.top_right}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.bottom}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.bottom_left}`}
                    ></span>
                    <h6>GK Your Partner</h6>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.team_data_img}>
            <a href="https://grenierjanetony.be" target="_blank">
              <div className={styles.single_work}>
                <img
                  src={gjt}
                  alt="Grenier Jane Tony"
                  className={styles.img_responsive}
                  data-no-retina
                />
                <div className={styles.overlay_text}>
                  <div className={styles.cases_image_inner}>
                    <span
                      className={`${styles.cases_line} ${styles.top}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.top_right}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.bottom}`}
                    ></span>
                    <span
                      className={`${styles.cases_line} ${styles.bottom_left}`}
                    ></span>
                    <h6>Grenier Jane Tony</h6>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Projects;
