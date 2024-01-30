import { useState, useEffect } from "react";
import styles from "./Slider.module.scss";
import sliderData from "./SliderData";
import leftChevron from "../../img/svg/left-arrow.svg";
import rightChevron from "../../img/svg/right-arrow.svg";

function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);

  function toggleImage(indexPayload) {
    setSliderIndex((state) => {
      if (indexPayload + state > sliderData.length) {
        return 1;
      } else if (indexPayload + state < 1) {
        return sliderData.length;
      } else {
        return state + indexPayload;
      }
    });
  }

  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 3000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <section className={styles.slider_section} id="Slider">
      <div className={styles.projects_description}>
        <h2 className={styles.projects_title}>Mes projets</h2>
        <p className={styles.projects_subtitle}>
          Parcourez mes réalisations accomplies en Wordpress / HTML / CSS / SCSS
          / React :
        </p>
      </div>
      <div className={styles.slider}>
        <div className={styles.item}>
          <a
            href={sliderData.find((obj) => obj.id === sliderIndex).url}
            target="_blank"
          >
            <div className={styles.single_work}>
              <img
                className={styles.img_responsive}
                src={`/images/img-${sliderIndex}.png`}
                alt=""
              />
              <div className={styles.overlay_text}>
                <div className={styles.cases_image_inner}>
                  <span className={`${styles.cases_line} ${styles.top}`}></span>
                  <span
                    className={`${styles.cases_line} ${styles.top_right}`}
                  ></span>
                  <span
                    className={`${styles.cases_line} ${styles.bottom}`}
                  ></span>
                  <span
                    className={`${styles.cases_line} ${styles.bottom_left}`}
                  ></span>
                  <div className={styles.content}>
                    <h5>
                      {
                        sliderData.find((obj) => obj.id === sliderIndex)
                          .description
                      }
                    </h5>
                    <h6>
                      {sliderData.find((obj) => obj.id === sliderIndex).text}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <button
          onClick={() => toggleImage(-1)}
          className={`${styles.navigation_btn} ${styles.prev_btn}`}
        >
          <img src={leftChevron} alt="previous image" />
        </button>
        <button
          onClick={() => toggleImage(1)}
          className={`${styles.navigation_btn} ${styles.next_btn}`}
        >
          <img src={rightChevron} alt="next image" />
        </button>
      </div>
    </section>
  );
}

export default Slider;
