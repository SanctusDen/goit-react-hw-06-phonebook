import React, { useState } from 'react';

import { Form } from 'components/formContainer/formDiv.styled';
import { Label, Field, SubmitBtn } from './ContactForm-module';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ContactFormReducer';
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', number: '' });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ ...contact, id: nanoid() }));
    setContact({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Field
        onChange={handleChange}
        value={contact.name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Number</Label>
      <Field
        onChange={handleChange}
        value={contact.number}
        type="tel"
        name="number"
        pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <SubmitBtn type="submit">Add Contact</SubmitBtn>
    </Form>
  );
};

export default ContactForm;
