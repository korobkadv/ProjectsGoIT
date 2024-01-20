import { Contacts, ContactsItem, Button } from './ContactList.styled';

export const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <Contacts>
      {visibleContacts.map(contact => (
        <ContactsItem key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
        </ContactsItem>
      ))}
    </Contacts>
  );
};
