import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'components/redux/toolkit/contactsSlice';
import { Container, ContactFilter, InputField } from 'components/ui';
import { selectContactsFilter } from 'components/redux/selectors/selectors';

const FilterContacts = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();
  return (
    <Container afar>
      <ContactFilter>
        Find contacts by name
        <InputField
          type="text"
          value={filter}
          onChange={event => dispatch(filterContacts(event.target.value))}
          placeholder="Please enter filter search value..."
        />
      </ContactFilter>
    </Container>
  );
};

export default FilterContacts;
