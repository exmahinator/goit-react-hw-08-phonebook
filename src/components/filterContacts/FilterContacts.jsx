import { Container, ContactFilter, InputField } from 'components/ui';

const FilterContacts = ({ value, onChange }) => {
  return (
    <Container afar>
      <ContactFilter>
        Find contacts by name
        <InputField type="text" value={value} onChange={onChange} />
      </ContactFilter>
    </Container>
  );
};

export default FilterContacts;
