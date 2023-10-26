import React from 'react';

import { Form } from 'components/formContainer/formDiv.styled';
import { Label, Field, SubmitBtn } from './ContactForm-module';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = ({ onSubmit }) => {
  const options = useSelector(state => state.ContactForm.options);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch({
      type: 'contacts/setOptions',
      payload: { ...options, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ ...options, id: nanoid() });
    dispatch({ type: 'contacts/setOptions', payload: options });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Field
        onChange={handleChange}
        value={options.name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Number</Label>
      <Field
        onChange={handleChange}
        value={options.number}
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
