import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contacts/contactsOperations';
import {
  ContactForm,
  ContactLabel,
  ContactButton,
  InputField,
} from 'components/ui';
import { selectContacts } from 'components/redux/contacts/contactsSelectors';

const HandleForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInput = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        alert('Something went wrong...');
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const submitForm = event => {
    event.preventDefault();

    const normalizedFilter = name.toLowerCase();

    const isPresent = contacts.some(contact => {
      return contact.name.toLowerCase() === normalizedFilter;
    });

    if (isPresent) {
      alert(`${name} is already in contacts!`);
      return;
    }

    dispatch(addContact({ name, number, resetForm }));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={submitForm}>
        <ContactLabel htmlFor="inputNameField">
          Name:
          <InputField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={onInput}
            id="inputNameField"
            required
          />
        </ContactLabel>
        <ContactLabel htmlFor="inputNumberField">
          Number:
          <InputField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={onInput}
            id="inputNumberField"
            required
          />
        </ContactLabel>
        <ContactButton type="submit">Add contact</ContactButton>
      </ContactForm>
    </>
  );
};

export default HandleForm;
