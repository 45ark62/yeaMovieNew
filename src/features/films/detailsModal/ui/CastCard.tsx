import React from 'react';
import styles from '../styles.module.css';
import type { Persons } from '@shared/types';

const CastCard: React.FC<{ person: Persons }> = function CastCard({ person }) {
  return (
    <li key={person.id} className={styles.person}>
      <img src={person.photo} alt="" />
      <p>{person.name} {person.profession}</p>
      
    </li>
  );
}

export default CastCard;
