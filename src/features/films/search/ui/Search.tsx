
import styles from '../styles.module.css';

function Search() {
  return (
    <section>
      <input placeholder="Поиск" className={styles.header__search}></input>
      <button className={styles.header__button}>Найти</button>
    </section>
  );
}

export default Search;
