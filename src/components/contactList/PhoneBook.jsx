import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ContactsItem,
  ContactsInfo,
  Container,
  ContactButton,
  InfoContainer,
} from 'components/ui';
import { removeContact } from 'components/redux/toolkit/slice';

const PhoneBook = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.trim().toLowerCase();
    return filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : contacts;
  };

  return (
    <Container>
      <h2>Contacts</h2>
      <ul>
        {getVisibleContacts().map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <InfoContainer>
                <ContactsInfo>{name}</ContactsInfo>
                <ContactsInfo>{number}</ContactsInfo>
              </InfoContainer>
              <ContactButton
                delete
                type="button"
                onClick={() => {
                  dispatch(removeContact(id));
                }}
              >
                Delete contact
              </ContactButton>
            </ContactsItem>
          );
        })}
      </ul>
    </Container>
  );
};

export default PhoneBook;
