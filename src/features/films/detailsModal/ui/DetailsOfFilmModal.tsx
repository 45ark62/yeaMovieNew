import { useNavigate, useParams } from 'react-router-dom';
import { useGetFilmDetailsQuery } from '../api/detailsApi';
import {
  FAVORITE_SVG,
  lockBodyScroll,
  UNFAVORITE_SVG,
  unlockBodyScroll,
} from '@shared/constants/constants';
import { addFavoriteMovie, removeFavoriteMovie } from '@entities/film/model/movieFavoriteSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@app/appStore';
import type { FilmsDeteils } from '@shared/types';

import styles from '../styles.module.css';
import ReactDOM from 'react-dom';
import Slider from '@features/films/detailsModal/ui/Slider';
import { useEffect } from 'react';

const DetailsOfFilmModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const close = () => navigate(-1);

  const { data, isLoading } = useGetFilmDetailsQuery(id);
  const isFavorite = useSelector((state: RootState) =>
    state.movieFavorite.movieFavorite.some((movie: FilmsDeteils) => movie.id === data?.id),
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleIsFavorite = () => {
    if (!data) return;

    if (isFavorite) {
      dispatch(removeFavoriteMovie(data.id));
    } else {
      dispatch(addFavoriteMovie(data));
    }
  };
  useEffect(() => {
    lockBodyScroll();

    return () => {
      unlockBodyScroll();
    };
  }, []);

  return ReactDOM.createPortal(
    <section className={styles.modalWrapper}>
      <article className={styles.modal}>
        <button onClick={close} className={styles.modal__close}>
          Назад
        </button>
        {isLoading ? (
          'Загрузка...'
        ) : (
          <>
            <div className={styles.body}>
              <div className={styles.poster}>
                <div className={styles.poster__img}>
                  {' '}
                  <img
                    src={data?.poster?.previewUrl}
                    alt={'изображение фильма' + `${data?.name}`}
                  />
                  <div>
                    <h3>Где смотреть:</h3>
                    <ul>
                      {data?.watchability.items.map((item) => (
                        <li key={item.id} className={styles.poster__logo}>
                          <img src={item.logo.url} alt="" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.poster__info}>
                  <h2>
                    {data?.name} ({data?.year}){' '}
                  </h2>
                  <button className={styles.favorite} onClick={handleIsFavorite}>
                    {isFavorite ? (
                      <>
                        <img src={FAVORITE_SVG} alt="Удалить из избранного" /> Удалить из избранного
                      </>
                    ) : (
                      <>
                        <img src={UNFAVORITE_SVG} alt="Добавить в избранное" /> Добавить в избранное
                      </>
                    )}
                  </button>
                  <section className={styles.about__film}>
                    <h2>О {data?.type === 'movie' ? 'Фильмe' : 'Сериалe'} </h2>
                    <p>Год производства: {data?.year}</p>
                    <p>Страна: {data?.countries.map((item) => item.name).join(', ')}</p>
                    <p>Жанр: {data?.genres.map((item) => item.name).join(', ')}</p>
                    <p>Возраст: {data?.ageRating}+</p>
                    <p>Длительность: {data?.movieLength} мин</p>
                    <p>Рейтинг: {data?.rating.imdb}</p>
                    <h2>Описание: </h2>
                    <p> {data?.description}</p>
                  </section>
                </div>
              </div>
            </div>
            <Slider persons={data?.persons ?? []} />
          </>
        )}
      </article>
    </section>,
    document.body,
  );
};

export default DetailsOfFilmModal;
