import type { RootState } from '@app/appStore';
import { FilmsList } from '@widgets/films';
import { useSelector } from 'react-redux';
import styles from '../style.module.css';

function Favorites() {
  const favoriteMovies = useSelector((state: RootState) => state.movieFavorite.movieFavorite);
  return (
    <div className={styles.container}>
      {favoriteMovies.length === 0 ? (
        <h1>У вас нет избранных фильмов</h1>
      ) : (
        <>
          <h1>Ваши избранные фильмы</h1>
          {<FilmsList films={favoriteMovies} />}
        </>
      )}
    </div>
  );
}

export default Favorites;
