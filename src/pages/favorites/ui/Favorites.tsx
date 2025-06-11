import type { RootState } from '@app/appStore';
import { FilmsList } from '@widgets/films';

import { useSelector } from 'react-redux';

function Favorites() {
  const favoriteMovies = useSelector((state: RootState) => state.movieFavorite.movieFavorite);
  return <div>{<FilmsList films={favoriteMovies}/>}</div>;
}

export default Favorites;
