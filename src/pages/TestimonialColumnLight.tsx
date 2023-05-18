import { FunctionComponent } from "react";
import styles from "./TestimonialColumnLight.module.css";
const TestimonialColumnLight: FunctionComponent = () => {
  return (
    <div className={styles.testimonialColumnLight}>
      <div className={styles.titleParent}>
        <b className={styles.title}>Testimonial section</b>
        <article className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.content}>
              <div className={styles.quote}>
                <div className={styles.text}>
                  “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.”
                </div>
                <div className={styles.author}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.info}>
                    <b className={styles.text}>Author Name</b>
                    <div className={styles.vpOfCompany}>VP of Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <div className={styles.quote}>
                <div className={styles.text}>
                  “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.”
                </div>
                <div className={styles.author}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image1@2x.png"
                  />
                  <div className={styles.info}>
                    <b className={styles.text}>Author Name</b>
                    <div className={styles.vpOfCompany}>VP of Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <div className={styles.quote}>
                <div className={styles.text}>
                  “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.”
                </div>
                <div className={styles.author}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image2@2x.png"
                  />
                  <div className={styles.info}>
                    <b className={styles.text}>Author Name</b>
                    <div className={styles.vpOfCompany}>VP of Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TestimonialColumnLight;
