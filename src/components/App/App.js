import { useSelector } from 'react-redux';
import { getAllContacts } from 'redux/contactsSlice';
import { GlobalStyle } from 'GlobalStyle';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

export default function App() {
  const allContacts = useSelector(getAllContacts);
  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {allContacts.contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p style={{ textAlign: 'center' }}>Don't have contacts...</p>
      )}
    </Container>
  );
}
