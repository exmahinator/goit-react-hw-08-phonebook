import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ContactsItem,
  ContactsInfo,
  ContactButton,
  InfoContainer,
  ContactList,
  ContactsSubTitle,
} from 'components/ui';
import {
  deleteContact,
  fetchContacts,
} from 'components/redux/contacts/contactsOperations';
import {
  selectContactsError,
  selectContactsLoading,
  selectVisibleContacts,
} from 'components/redux/contacts/contactsSelectors';
import { useEffect } from 'react';

const PhoneBook = () => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const getVisibleContacts = useSelector(selectVisibleContacts);
  const getLoading = useSelector(selectContactsLoading);
  const getError = useSelector(selectContactsError);

  useEffect(() => {
    if (token) {
      setTimeout(() => {
        dispatch(fetchContacts());
      }, 400);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <ContactsSubTitle>Contacts</ContactsSubTitle>
      {getLoading && <p>Casting spell...</p>}
      {!getError ? (
        <ContactList>
          {getVisibleContacts.map(({ id, name, number }) => {
            return (
              <ContactsItem key={id}>
                <InfoContainer>
                  <ContactsInfo>{name}</ContactsInfo>
                  <ContactsInfo>{number}</ContactsInfo>
                </InfoContainer>
                <ContactButton
                  delete
                  type="button"
                  disabled={getLoading}
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  Delete
                </ContactButton>
              </ContactsItem>
            );
          })}
        </ContactList>
      ) : (
        <p>Alchemical laboratory is currently closed... Try again later...</p>
      )}
    </>
  );
};

export default PhoneBook;
