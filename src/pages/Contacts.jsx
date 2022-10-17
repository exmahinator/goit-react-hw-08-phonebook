import PhoneBook from 'components/contactList/PhoneBook';
import HandleForm from 'components/handleForm';
import FilterContacts from 'components/filterContacts';
import {
  ContactsContainer,
  ContactsSubContainer,
  ContactsBackgroundContainer,
} from 'components/ui';

const Contacts = () => {
  return (
    <ContactsContainer>
      <ContactsSubContainer>
        <HandleForm />
        <ContactsBackgroundContainer />
      </ContactsSubContainer>
      <ContactsSubContainer>
        <FilterContacts />
      </ContactsSubContainer>
      <ContactsSubContainer>
        <PhoneBook />
      </ContactsSubContainer>
    </ContactsContainer>
  );
};

export default Contacts;
