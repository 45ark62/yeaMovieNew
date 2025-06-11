import { addSearchTerm, clearSearchHistory } from '@features/films/search/model/searchHistorySlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import type { RootState } from '@app/appStore';
import styles from '../styles.module.css';
import Dropdown from '@shared/ui/dropdown/Dropdown';
interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
function Search({ value, setValue, setSearchTerm }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const history = useSelector((state: RootState) => state.searchHistory.searchHistory);
  const handleSelect = (term: string) => {
    setValue(term);
    setShowDropdown(false);
  };
  const handleSearch = () => {
    if (value === '') return;
    setShowDropdown(false);
    setSearchTerm(value);
    dispatch(addSearchTerm(value));
  };
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue.trim() === '') {
      setSearchTerm('');
    }
  };
  return (
    <section className={styles.search__container}>
      <div className={styles.search__inputWrapper}>
        <input
          value={value}
          placeholder="Поиск"
          className={styles.input__search}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setShowDropdown(false)}
          onChange={(e) => handleChangeValue(e)}></input>
        {showDropdown && history.length > 0 && (
          <Dropdown
            items={history}
            onSelect={handleSelect}
            handleDeleteAll={() => dispatch(clearSearchHistory())}
          />
        )}
      </div>

      <button className={styles.search__button} onClick={handleSearch}>
        Найти
      </button>
    </section>
  );
}

export default Search;
