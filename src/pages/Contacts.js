import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Loader } from '../components/Loader/Loader';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { Section } from '../components/Section/Section';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

import { Wrapper, SectionWrapper } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Helmet>
        <title>Phonebook - Contacts list</title>
      </Helmet>
      <SectionWrapper>
        <Section title="Add contact">
          <ContactForm />
        </Section>
      </SectionWrapper>

      <SectionWrapper>
        {contacts.length ? (
          <Section title="Contacts">
            <Filter />
            <ContactList />
          </Section>
        ) : (
          <p>No contacts...</p>
        )}
        {isLoading && !error && <Loader />}
      </SectionWrapper>
    </Wrapper>
  );
}
