import { useSelector } from 'react-redux';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getContacts } from '../redux/contactsSlise';

import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);
  
  return (
    <AppWrapper>
      <Section title="Phonebook Redux">
        <ContactForm />
      </Section>

      {contacts.length ? (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      ) : (
        <p>No contacts...</p>
      )}

      <GlobalStyle />
    </AppWrapper>
  );
};
