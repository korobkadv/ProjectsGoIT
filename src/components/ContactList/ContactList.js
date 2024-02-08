import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlise';
import { getFilters } from '../../redux/filterSlise';

import { Contacts } from './ContactList.styled';
import { ContactItem } from './ContactItem';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

      // console.log(filter);
  const visibleContacts =
    contacts.length &&
    contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase())
      // cont.name.toLowerCase()
    );

  return (
    <>
      {visibleContacts.length ? (
        <Contacts>
          {visibleContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </Contacts>
      ) : (
        <p>No contacts according to your search!</p>
      )}
    </>
  );
};
