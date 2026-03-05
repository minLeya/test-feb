import { Container, TextField, Button, InputAdornment } from "@mui/material";
import styles from "./SearchSection.module.scss";

const SearchSection = () => {
  return (
    <section className={styles.searchSection}>
      <Container maxWidth="xl">
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>Блок с поиском</h2>

            <div className={styles.ratingBlock}>
              <img src="./images/star.png" className={styles.star} alt="star" />
              <img src="./images/star.png" className={styles.star} alt="star" />
              <img src="./images/star.png" className={styles.star} alt="star" />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.searchBlock}>
              <TextField
                fullWidth
                placeholder="Товары, услуги..."
                className={styles.searchInput}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src="./images/search-icon.png" alt="search" className={styles.searchIcon} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Button
              variant="contained"
              className={styles.searchButton}
              disableElevation
            >
              Поиск
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SearchSection;