import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from './Loader/Loader';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Section title="Phonebook MockAPI">
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

      {isLoading && !error && <Loader />}
      <GlobalStyle />
    </AppWrapper>
  );
};
