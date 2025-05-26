import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <section>
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/ink/96/film-reel.png"
          alt="film-reel"
        />
        <h1>MoviePet</h1>
      </section>
      <section>
        <Link to="/">Главная</Link>
        <Link to="/favorite">Избранное</Link>
        <Link to="/history">История поиска</Link>
      </section>
    </header>
  );
}

export default Header;
