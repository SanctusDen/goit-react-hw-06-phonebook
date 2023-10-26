import React, { useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';
import { FormContainer } from './formContainer/formDiv.styled';
import { Filter } from './Filter/Filter';
import { ContactList } from './List/ContactList';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.ContactForm.contacts);
  const filter = useSelector(state => state.ContactForm.filter);
  const dispatch = useDispatch();
  console.log(contacts);
  const handleFilterChange = e => {
    dispatch({ type: 'contacts/setFilter', payload: e.target.value });
  };

  const onSubmit = newContact => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch({
      type: 'contacts/setContacts',
      payload: [...contacts, newContact],
    });

    dispatch({
      type: 'contacts/setContacts',
      payload: prev => [...prev, newContact],
    });
  };

  // function parseLocalStorage() {
  //   try {
  //     const recievedContacts = JSON.parse(localStorage.getItem('contacts'));
  //     if (recievedContacts) {
  //       return recievedContacts;
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  const handleDelete = e => {
    dispatch({
      type: 'contacts/setContacts',
      payload: contacts.filter(contact => contact.name !== e),
    });
  };

  const getFoundContacts = () => {
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
