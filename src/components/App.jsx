import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const storageKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(storageKey, JSON.stringify(this.state.contacts));
    }
  }

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

    const visibleContacts =
      contacts.length &&
      contacts.filter(cont => {
        return cont.name.toLowerCase().includes(filter.toLowerCase());
      });

    return (
      <AppWrapper>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.onAddContact} />
        </Section>

        {visibleContacts.length ? (
          <Section title="Contacts">
            <Filter valueFilter={filter} onChangeFilter={this.onChangeFilter} />

            <ContactList
              visibleContacts={visibleContacts}
              onDeleteContact={this.onDeleteContact}
            />
          </Section>
        ) : (
          'No contacts'
        )}

        <GlobalStyle />
      </AppWrapper>
    );
  }
}
