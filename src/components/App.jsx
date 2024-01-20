import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onChangeFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  onAddContact = value => {
    const { name, number } = value;

    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is alredy in contacts!`);
      return 'hasAlready';
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
        filter: '',
      };
    });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(cont => {
      const hasName = cont.name.toLowerCase().includes(filter.toLowerCase());

      return hasName;
    });

    return (
      <AppWrapper>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.onAddContact} />
        </Section>

        <Section title="Contacts">
          <Filter valueFilter={filter} onChangeFilter={this.onChangeFilter} />
          <ContactList
            visibleContacts={visibleContacts}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>

        <GlobalStyle />
      </AppWrapper>
    );
  }
}
