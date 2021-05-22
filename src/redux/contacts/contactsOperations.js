import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contactsAction';

// axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact = contact => async dispatch => {
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const removeContact = contactId => async dispatch => {
  dispatch(removeContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(removeContactSuccess(contactId));
  } catch (error) {
    dispatch(removeContactError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContacts,
  addContact,
  removeContact,
};
