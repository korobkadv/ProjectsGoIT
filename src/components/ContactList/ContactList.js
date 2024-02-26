import { useSelector } from 'react-redux';
import { visibleContacts } from '../../redux/contacts/selectors';

import { Contacts } from './ContactList.styled';
import { ContactItem } from './ContactItem';

export const ContactList = () => {
  const visibleContact = useSelector(visibleContacts);

  return (
    <>
      {visibleContact.length ? (
        <Contacts>
          {visibleContact.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </Contacts>
      ) : (
        <p>No contacts according to your search!</p>
      )}
    </>
  );
};
