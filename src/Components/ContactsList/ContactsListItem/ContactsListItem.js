import styles from './ContactsListItem.module.css';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const ContactsListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={styles.item}>
      <span>
        <PhoneIphoneIcon />
        <span className={styles.name}> {name} : </span>
        <span className={styles.number}>{number}</span>
      </span>

      <button className={styles.button} onClick={() => onRemove(id)}>
        <HighlightOffIcon />
        Remove
      </button>
    </li>
  );
};

export default ContactsListItem;
