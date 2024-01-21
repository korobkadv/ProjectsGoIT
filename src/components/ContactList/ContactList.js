import { Contacts } from './ContactList.styled';
import { ContactItem } from './ContactItem';

export const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <Contacts>
      {visibleContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </Contacts>
  );
};
