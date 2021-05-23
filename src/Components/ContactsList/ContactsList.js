import { useSelector, useDispatch } from 'react-redux';
import ContactsListItem from './ContactsListItem/ContactsListItem';
import contactsOperations from '../../redux/contacts/contactsOperations';
import { getVisibleContacts } from '../../redux/contacts/contactsSelectors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './ContactListFade.css';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  const onRemove = id => dispatch(contactsOperations.removeContact(id));
  if (contacts.length === 0) return null;

  return (
    <>
      <h2 className="title">Contacts</h2>
      <TransitionGroup component="ul">
        {contacts.map(contact => (
          <CSSTransition key={contact.id} timeout={250} classNames="item-fade">
            <ContactsListItem
              key={contact.id}
              {...contact}
              onRemove={() => onRemove(contact.id)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}
