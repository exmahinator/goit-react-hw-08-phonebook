import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ContactsItem,
  ContactsInfo,
  ContactButton,
  InfoContainer,
  ContactList,
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
      console.log(token);
      setTimeout(() => {
        dispatch(fetchContacts());
      }, 400);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <h2>Contacts</h2>
      {getLoading && <p>Loading...</p>}
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
                  Delete contact
                </ContactButton>
              </ContactsItem>
            );
          })}
        </ContactList>
      ) : (
        <p>Something went wrong... Try again later...</p>
      )}
    </>
  );
};

export default PhoneBook;
