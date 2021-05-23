import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperation from '../redux/contacts/contactsOperations';
import { CSSTransition } from 'react-transition-group';
import Form from '../Components/Form';
import ContactsList from '../Components/ContactsList';
import Filter from '../Components/Filter';
import Loader from 'react-loader-spinner';
import {
  getLoading,
  getContacts,
  getError,
} from '../redux/contacts/contactsSelectors';
export default function ContactsView() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <div className="phone-form">
        <CSSTransition
          in={true}
          appear={true}
          classNames="fade"
          timeout={2000}
          unmountOnExit
        >
          <h1 className="title">Phonebook</h1>
        </CSSTransition>
        <Form />
        {contacts.length > 0 && <Filter />}
      </div>

      <div>
        {isLoading && (
          <Loader
            className="loader"
            type="TailSpin"
            color="cornflowerblue"
            height={50}
            width={50}
          />
        )}
        {error && <p className="error-message">{error.message}</p>}
        <ContactsList />
      </div>
    </div>
  );
}
