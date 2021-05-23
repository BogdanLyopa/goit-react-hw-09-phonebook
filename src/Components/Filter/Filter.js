import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { changedFilter } from '../../redux/contacts/contactsAction';
import { getFilter } from '../../redux/contacts/contactsSelectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => dispatch(changedFilter(event.target.value));

  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
}
