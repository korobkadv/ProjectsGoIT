import { useDispatch } from 'react-redux';
import { delContacts } from '../../redux/contactsSlise';
import { ContactsItem, Button } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactsItem>
      {contact.name}: {contact.number}
      <Button onClick={() => dispatch(delContacts(contact.id))}>Delete</Button>
    </ContactsItem>
  );
};
