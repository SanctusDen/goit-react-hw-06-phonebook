import React, { useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';
import { FormContainer } from './formContainer/formDiv.styled';
import { Filter } from './Filter/Filter';
import { ContactList } from './List/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  setContacts,
  setFilter,
} from 'redux/ContactFormReducer';

export const App = () => {
  const contacts = useSelector(state => state.ContactForm.contacts);
  const filter = useSelector(state => state.ContactForm.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const onSubmit = newContact => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(setContacts([...contacts, newContact]));

    dispatch(setContacts(prev => [...prev, newContact]));
  };

  const handleDelete = e => {
    dispatch(deleteContact());
  };

  const getFoundContacts = () => {
    // return dispatch(
    //   setFilter(
    //     contacts.filter(contact =>
    //       contact.name.toLowerCase().includes(filter.toLowerCase(contact.name))
    //     )
    //   )
    // );
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase(contact.name))
    );
  };

  useEffect(() => {
    JSON.stringify(contacts);
  }, [contacts]);

  const visibleContacts = getFoundContacts();

  return (
    <FormContainer>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />

      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <ContactList contacts={visibleContacts} handleDelete={handleDelete} />
    </FormContainer>
  );
};
