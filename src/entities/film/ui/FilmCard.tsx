import { useLocation, useNavigate } from 'react-router-dom';
import type { Film } from '@shared/types';
import styles from '../styles.module.css';

const FilmCard: React.FC<{ film: Film }> = ({ film }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const openModal = () => {
    navigate(`/main/movies/${film.id}`, {
      state: { backgroundLocation: location },
    });
  };
  return (
    <li key={film.id} className={styles.films__item} onClick={openModal}>
      <article className={styles.films__item__card}>
        <img
          className={styles.card__poster}
          src={
            film.poster?.previewUrl ||
            'https://avatars.mds.yandex.net/i?id=853c48730f862c8950c59df90a40998b38e56b18-8318113-images-thumbs&ref=rim&n=33&w=375&h=375'
          }
          alt={`Постер фильма ${film.name}`}></img>
        <span className={styles.card__rating}>{film.rating.imdb}</span>

        <h3 className={styles.card__title}>{film.name}</h3>
        <p className={styles.card__info}>
          {film.year}, {film.movieLength} мин.
        </p>
      </article>
    </li>
  );
};

export default FilmCard;
