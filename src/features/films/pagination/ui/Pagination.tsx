import styles from '../styles.module.css';
import { DOTS, usePagination } from '@shared/hooks/usePagination';
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
function Pagination({ totalPages = 10, onPageChange, currentPage }: PaginationProps) {
  const paginationRange = usePagination({ totalPages, siblingCount: 1, currentPage });
  const lastPage = paginationRange[paginationRange.length - 1];
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <section className={styles.pagination}>
      <button className={styles.arrow} onClick={handlePreviousPage} disabled={currentPage === 1}>
        &laquo;
      </button>
      <div className={styles.pagination__list}>
        {paginationRange.map((page, index) => {
          if (page === DOTS) {
            return (
              <span key={`dots-${index}`} className={styles.dots}>
                &hellip;
              </span>
            );
          }

          return (
            <button
              key={page}
              className={`${styles.pageNumber} ${page === currentPage ? styles.active : ''}`}
              disabled={page === currentPage}
              onClick={() => handlePageClick(page as number)}>
              {page}
            </button>
          );
        })}
      </div>
      <button className={styles.arrow} onClick={handleNextPage} disabled={currentPage === lastPage}>
        &raquo;
      </button>
    </section>
  );
}

export default Pagination;
