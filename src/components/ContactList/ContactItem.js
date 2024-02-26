import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { ContactsItem, Button } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactsItem>
      {contact.name}: {contact.phone}
      <Button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
    </ContactsItem>
  );
};
