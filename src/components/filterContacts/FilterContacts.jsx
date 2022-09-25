import { Container, ContactFilter, InputField } from 'components/ui';
import PropTypes from 'prop-types';

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

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
