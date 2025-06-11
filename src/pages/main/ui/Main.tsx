import { useGetFilmsBySearchQuery } from '@features/films/search/api/filmSearchApi';
import { useGetFilmsQuery } from '@widgets/films/api/filmsApi';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Pagination from '@features/films/pagination/ui/Pagination';
import Search from '@features/films/search/ui/Search';
import FilmsList from '@widgets/films/ui/FilmsList';
import './main.css'

function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const isSearchMode = searchTerm.trim() !== '';
  const {
    data: filmsData,
    isLoading,
    isError,
    error,
  } = useGetFilmsBySearchQuery({ page: currentPage, query: searchTerm }, { skip: !isSearchMode });

  const {
    data: allFilmsData,
    isLoading: isLoadingAll,
    isError: isErrorAll,
    error: errorAll,
  } = useGetFilmsQuery(currentPage, {
    skip: isSearchMode,
  });

  const finalData = isSearchMode ? filmsData : allFilmsData;
  const finalIsLoading = isSearchMode ? isLoading : isLoadingAll;
  const finalIsError = isSearchMode ? isError : isErrorAll;
  const finalError = isSearchMode ? error : errorAll;

  useEffect(() => {
    if (finalIsError) {
      toast.error((finalError as { data: { message: string } })?.data?.message || 'Ошибка');
    }
  }, [finalError, finalIsError]);
  return (
    <div>
      <Search value={value} setValue={setValue} setSearchTerm={setSearchTerm} />
      {isSearchMode ? <h2 >Результаты поиска</h2> : <h2>Популярные фильмы</h2>}

      {finalData?.docs.length === 0 ? (
        <h1>Ничего не найдено.Проверьте поисковую строку</h1>
      ) : (
        <>
          <Pagination
            totalPages={finalData?.pages ?? 1}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
          <FilmsList films={finalData?.docs ?? []} isLoading={finalIsLoading} />
          <Pagination
            totalPages={finalData?.pages ?? 1}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      <Outlet />
    </div>
  );
}

export default Main;
