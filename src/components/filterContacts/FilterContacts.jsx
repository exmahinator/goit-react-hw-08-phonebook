import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'components/redux/contacts/contactsSlice';
import { ContactFilter, InputField } from 'components/ui';
import { selectContactsFilter } from 'components/redux/contacts/contactsSelectors';

const FilterContacts = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();
  return (
    <>
      <ContactFilter>
        Find contacts by name
        <InputField
          type="text"
          value={filter}
          onChange={event => dispatch(filterContacts(event.target.value))}
          placeholder="Please enter filter search value..."
        />
      </ContactFilter>
    </>
  );
};

export default FilterContacts;
