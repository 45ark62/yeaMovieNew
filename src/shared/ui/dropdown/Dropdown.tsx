import styles from './styles.module.css';

interface Props {
  items: string[];
  onSelect: (value: string) => void;
  handleDeleteAll: () => void;
}
function Dropdown({ items, onSelect, handleDeleteAll }: Props) {
  if (!items.length) return null;
  return (
    <ul className={styles.dropdown}>
      {items.map((item, index) => (
        <li key={index} className={styles.dropdown__item} onMouseDown={() => onSelect(item)}>
          {item}
        </li>
      ))}
      <li className={styles.delete} onMouseDown={handleDeleteAll}>
        Очистить историю поиска
      </li>
    </ul>
  );
}

export default Dropdown;
