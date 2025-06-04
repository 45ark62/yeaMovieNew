import FilmCard from '@entities/film/ui/FilmCard';
import styles from '../styles.module.css';

import Skeleton from '@shared/ui/skeleton/Skeleton';
import type { Film } from '@shared/types';
interface FilmsListProps {
  films: Film[];
  isLoading: boolean;
}
function FilmsList({ films, isLoading }: FilmsListProps) {
  return (
    <>
      <ul className={styles.films}>
        {isLoading
          ? [...new Array(24)].map((_, index) => <Skeleton key={index} />)
          : films.map((film: Film) => <FilmCard key={film.id} film={film} />)}
      </ul>
    </>
  );
}

export default FilmsList;
