import { useSelector, useDispatch } from 'react-redux';
import { filterForContact } from 'components/redux/toolkit/slice';
import { Container, ContactFilter, InputField } from 'components/ui';

const FilterContacts = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <Container afar>
      <ContactFilter>
        Find contacts by name
        <InputField
          type="text"
          value={filter}
          onChange={event => dispatch(filterForContact(event.target.value))}
          placeholder="Please enter filter search value..."
        />
      </ContactFilter>
    </Container>
  );
};

export default FilterContacts;
