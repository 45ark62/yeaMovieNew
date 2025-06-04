import styles from '../styles.module.css';
import { DOTS, usePagination } from '@shared/hooks/usePagination';
interface PaginationProps {
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (page: number) => void;
  currentPage: number;
}
function Pagination({
  totalPages = 10,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}: PaginationProps) {
  const paginationRange = usePagination({ totalPages, siblingCount: 1, currentPage });
  const lastRange = paginationRange[paginationRange.length - 1];
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
              onClick={() => handlePageClick(page)}>
              {page}
            </button>
          );
        })}
      </div>
      <button
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage === lastRange}>
        &raquo;
      </button>
    </section>
  );
}

export default Pagination;
