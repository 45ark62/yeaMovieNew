import { Link } from 'react-router-dom'
import styles from '../styles.module.css'

function NotFound() {
  return (
     <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Страница не найдена</h2>
      <p className={styles.text}>Упс! Похоже, вы перешли по несуществующему адресу.</p>
      <Link to="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </div>
  )
}

export default NotFound