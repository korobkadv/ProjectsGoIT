import { ContactsItem, Button } from './ContactItem.styled';

export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <ContactsItem>
      {contact.name}: {contact.number}
      <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
    </ContactsItem>
  );
};
