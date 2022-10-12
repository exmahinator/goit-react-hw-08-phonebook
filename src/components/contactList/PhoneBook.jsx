import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ContactsItem,
  ContactsInfo,
  Container,
  ContactButton,
  InfoContainer,
  ContactList,
} from 'components/ui';
import {
  deleteContact,
  fetchContacts,
} from 'components/redux/operations/operations';
import {
  selectContactsError,
  selectContactsLoading,
  selectVisibleContacts,
} from 'components/redux/selectors/selectors';
import { useEffect } from 'react';

const PhoneBook = () => {
  const dispatch = useDispatch();

  const getVisibleContacts = useSelector(selectVisibleContacts);
  const getLoading = useSelector(selectContactsLoading);
  const getError = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h2>Contacts</h2>
      {getLoading && <p>Loading...</p>}
      {!getError ? (
        <ContactList>
          {getVisibleContacts.map(({ id, name, phone }) => {
            return (
              <ContactsItem key={id}>
                <InfoContainer>
                  <ContactsInfo>{name}</ContactsInfo>
                  <ContactsInfo>{phone}</ContactsInfo>
                </InfoContainer>
                <ContactButton
                  delete
                  type="button"
                  disabled={getLoading}
                  onClick={() => {
                    // console.log(`ID:`, id);
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
    </Container>
  );
};

export default PhoneBook;
