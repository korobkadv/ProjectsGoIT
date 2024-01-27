import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const storageKey = 'contacts';

const getContacts = () => {
  const savedContacts = localStorage.getItem(storageKey);
  return savedContacts !== null ? JSON.parse(savedContacts) : [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const onChangeFilter = evt => {
    setFilter(evt.target.value);
  };

  const onAddContact = value => {
    const { name, number } = value;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is alredy in contacts!`);
      return 'hasAlready';
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const onDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts =
    contacts.length &&
    contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <AppWrapper>
      <Section title="Phonebook">
        <ContactForm onAddContact={onAddContact} />
      </Section>

      {contacts.length ? (
        <Section title="Contacts">
          <Filter valueFilter={filter} onChangeFilter={onChangeFilter} />

          {visibleContacts.length ? (
            <ContactList
              visibleContacts={visibleContacts}
              onDeleteContact={onDeleteContact}
            />
          ) : (
            <p>No contacts according to your search!</p>
          )}
        </Section>
      ) : (
        <p>No contacts...</p>
      )}

      <GlobalStyle />
    </AppWrapper>
  );
};
