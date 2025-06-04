import Pagination from '@features/films/pagination/ui/Pagination';
import { useGetFilmsQuery } from '@widgets/films/api/filmsApi';
import FilmsList from '@widgets/films/ui/FilmsList';
import { useState } from 'react';

function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetFilmsQuery(currentPage);
  const handleNextPage = () => {
    if (currentPage < data?.total) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Pagination
        totalPages={data?.pages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
      <FilmsList films={data?.docs} isLoading={isLoading} />
      <Pagination
        totalPages={data?.pages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Main;
