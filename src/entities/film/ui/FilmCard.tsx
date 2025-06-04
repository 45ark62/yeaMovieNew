import styles from '../styles.module.css';

function FilmCard({ film }) {
  return (
    <li key={film.id} className={styles.films__item}>
      <article className={styles.films__item__card}>
        <img
          className={styles.card__poster}
          src={film.poster.previewUrl}
          alt={`Постер фильма ${film.name}`}></img>
        <span className={styles.card__rating}>{film.rating.imdb}</span>

        <h3 className={styles.card__title}>{film.name}</h3>
        <p className={styles.card__info}>
          {film.year}, {film.movieLength} мин.
        </p>
      </article>
    </li>
  );
}

export default FilmCard;
