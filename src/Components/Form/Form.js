import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './Form.module.css';
import contactsOperations from '../../redux/contacts/contactsOperations';
import { getContacts } from '../../redux/contacts/contactsSelectors';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleCheckUniqueContact = name => {
    const check = contacts.find(contact => {
      return contact.name === name;
    });
    if (check) {
      alert('Contact is already exist');
      return check;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (handleCheckUniqueContact(name)) {
      reset();
      return;
    }
    dispatch(contactsOperations.addContact({ name, number }));
    reset();
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor={nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
            id={nameInputId}
          />
        </label>

        <label className={styles.label} htmlFor={numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            placeholder="Enter phone number"
            value={number}
            onChange={handleChange}
            id={numberInputId}
          />
        </label>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
