import PhoneBook from 'components/contactList/PhoneBook';
import HandleForm from 'components/handleForm';
import FilterContacts from 'components/filterContacts';

const Contacts = () => {
  return (
    <>
      <HandleForm />
      <FilterContacts />
      <PhoneBook />
    </>
  );
};

export default Contacts;
