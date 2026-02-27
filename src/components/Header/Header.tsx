import { useState } from 'react'
import { AppBar, Toolbar, IconButton, Container } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { AnimatePresence } from 'framer-motion'
import styles from './Header.module.scss'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <AppBar position="sticky" className={styles.header} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters className={styles.toolbar}>
            <a href="/" className={styles.logo}>
              <img src="/images/Logo.png" alt="Science" />
            </a>

            <nav className={styles.desktopMenu}>
              <a href="#" className={styles.navLink}>Пункт 1</a>
              <a href="#" className={styles.navLink}>Пункт 2</a>
              <a href="#" className={styles.navLink}>Пункт 3</a>
              <a href="#" className={styles.navLink}>Пункт 4</a>
            </nav>

            <a href="tel:+78009999999" className={styles.phoneLink}>
              +7 (800) 999-99-99
            </a>

            {/* Одна кнопка, которая меняет иконку */}
            <IconButton
              className={styles.menuButton}
              onClick={handleMobileMenuToggle}
              aria-label={mobileMenuOpen ? "закрыть меню" : "открыть меню"}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu 
            open={mobileMenuOpen}
            onClose={handleMobileMenuToggle}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Header