import React from 'react';
import {
  ContactsItem,
  ContactsInfo,
  Container,
  ContactButton,
  InfoContainer,
} from 'components/ui';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <Container>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => {
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
                  onContactDelete(id);
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

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
