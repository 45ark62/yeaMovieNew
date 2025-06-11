import { NavLink, type NavLinkProps } from 'react-router-dom';
import styles from '../header.module.css';


function Header() {
  const isActiveItem: NavLinkProps['className'] = ({ isActive }) =>
    isActive ? styles.active : styles.inactive;
  return (
    <header className={styles.header}>
      <section className={styles.header__logo}>
        <img className={styles.logo} src="/src/shared/assets/logo.png" alt="film-reel" />
        <h1>MoviePet</h1>
      </section>
      <section className={styles.header__container}>
        <nav className={styles.header__container__nav}>
          <NavLink to="/main" className={isActiveItem}>
            Главная
          </NavLink>
          <NavLink to="/favorites" className={isActiveItem}>
            Избранное
          </NavLink>
         
        </nav>
      </section>
      
    </header>
  );
}

export default Header;
