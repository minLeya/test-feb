import { Container } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './MobileMenu.module.scss'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          
          <motion.div 
            className={styles.mobileMenu}
            initial={{ y: '-20px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-20px', opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Container maxWidth="xl">
              <nav>
                <ul className={styles.mobileNavList}>
                  <li><a href="#" onClick={onClose}>Пункт 1</a></li>
                  <li><a href="#" onClick={onClose}>Пункт 2</a></li>
                  <li><a href="#" onClick={onClose}>Пункт 3</a></li>
                  <li><a href="#" onClick={onClose}>Пункт 4</a></li>
                  <li className={styles.mobilePhone}>
                    <a href="tel:+78009999999" onClick={onClose}>
                      +7 (800) 999-99-99
                    </a>
                  </li>
                </ul>
              </nav>
            </Container>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu