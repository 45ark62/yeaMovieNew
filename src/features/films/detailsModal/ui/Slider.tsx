import React, { useRef } from 'react';
import styles from '../styles.module.css';
import CastCard from './CastCard';
import type { Persons } from '@shared/types';
interface SliderProps {
  persons: Persons[];
}
const Slider: React.FC<SliderProps> = ({ persons }) => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += 300;
  };
  return (
    <section>
      <h2>Создатели фильма</h2>
      <div className={styles.scrollWrapper}>
        <button className={styles.scrollButton} onClick={scrollLeft}>
          {'<'}
        </button>
        <ul className={styles.persons__container} ref={scrollRef}>
          {persons.map((item: Persons) => (item.name ? <CastCard person={item} /> : ''))}
        </ul>

        <button className={styles.scrollButton} onClick={scrollRight}>
          {'>'}
        </button>
      </div>
    </section>
  );
};

export default Slider;
