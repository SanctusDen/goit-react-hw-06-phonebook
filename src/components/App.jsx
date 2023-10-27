import ContactForm from './ContactForm/ContactForm';
import { FormContainer } from './formContainer/formDiv.styled';
import { Filter } from './Filter/Filter';
import { ContactList } from './List/ContactList';

export const App = () => {
  return (
    <FormContainer>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList c />
    </FormContainer>
  );
};
