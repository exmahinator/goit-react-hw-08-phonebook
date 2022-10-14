import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contacts/contactsOperations';
import {
  ContactForm,
  ContactLabel,
  ContactButton,
  InputField,
} from 'components/ui';
import { nanoid } from 'nanoid';
import { selectContacts } from 'components/redux/contacts/contactsSelectors';

const HandleForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const uniqueNameId = nanoid();
  const uniqueNumberId = nanoid();

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

    // це не onSubmit у цьому класі, це проп, в якому знаходиться посилання на метод formSubmitHandler з App
    // тут генерую унікальну ID кожного разу при натисканні Add contact у формі, при сабміті форми

    dispatch(addContact({ name, phone: number, id: nanoid(), resetForm }));
  };

  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm ... /> */}
      <ContactForm onSubmit={submitForm}>
        <ContactLabel htmlFor={uniqueNameId}>
          Name:
          <InputField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={onInput}
            id={uniqueNameId}
            required
          />
        </ContactLabel>
        <ContactLabel htmlFor={uniqueNumberId}>
          Number:
          <InputField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={onInput}
            id={uniqueNumberId}
            required
          />
        </ContactLabel>
        <ContactButton type="submit">Add contact</ContactButton>
      </ContactForm>
    </>
  );
};

export default HandleForm;
