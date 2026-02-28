import { Container, Button, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./SlideSection.module.scss";

const SlideSection = () => {
  return (
    <section className={styles.slideSection}>
      <Container maxWidth="xl">
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.imageWrapper}>
              <img
                src="/images/slide-image.png"
                alt="Слайд 3"
                className={styles.image}
              />

              <div className={styles.pagination}>
                <div className={styles.arrowGroup}>
                  <IconButton className={styles.chevronLeft}>
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton className={styles.chevronRight}>
                    <ChevronRightIcon />
                  </IconButton>
                </div>

                <div className={styles.dots}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={`${styles.dot} ${styles.active}`}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <h1 className={styles.title}>Слайд 3</h1>

            <p className={styles.description}>
              Сайт рыбатект поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений в домашних условиях. При создании генератора
              мы использовали небезизвестный универсальный код речей.
            </p>

            <Button
              variant="contained"
              className={styles.button}
              disableElevation
            >
              Кнопка
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SlideSection;