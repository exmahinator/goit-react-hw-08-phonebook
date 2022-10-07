import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'components/redux/toolkit/slice';
import {
  Container,
  ContactForm,
  ContactLabel,
  ContactButton,
  InputField,
} from 'components/ui';
import { nanoid } from 'nanoid';

const HandleForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const uniqueNameId = nanoid();
  const uniqueNumberId = nanoid();

  const onInput = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        alert('Something went wrong...');
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const submitForm = event => {
    event.preventDefault();

    const normalizedFilter = name.toLowerCase();

    const isPresent = contacts.some(contact => {
      return contact.name.toLowerCase() === normalizedFilter;
    });

    if (isPresent) {
      alert(`${name} is already in contacts!`);
      return;
    }

    // це не onSubmit у цьому класі, це проп, в якому знаходиться посилання на метод formSubmitHandler з App
    // тут генерую унікальну ID кожного разу при натисканні Add contact у формі, при сабміті форми
    dispatch(addContact({ name, number, id: nanoid() }));
    resetForm();
  };

  return (
    <section>
      <Container>
        <h1>Phonebook</h1>
        {/* <ContactForm ... /> */}
        <ContactForm onSubmit={submitForm}>
          <ContactLabel htmlFor={uniqueNameId}>
            Name:
            <InputField
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={onInput}
              id={uniqueNameId}
              required
            />
          </ContactLabel>
          <ContactLabel htmlFor={uniqueNumberId}>
            Number:
            <InputField
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={onInput}
              id={uniqueNumberId}
              required
            />
          </ContactLabel>
          <ContactButton type="submit">Add contact</ContactButton>
        </ContactForm>
      </Container>
    </section>
  );
};

export default HandleForm;

// ------------------------------------------------------------------------------------------------------------------------
// import React, { Component } from 'react';
// import {
//   Container,
//   ContactForm,
//   ContactLabel,
//   ContactButton,
//   InputField,
// } from 'components/ui';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

// class HandleForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   uniqueNameId = nanoid();
//   uniqueNumberId = nanoid();

//   onInput = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   onSubmit = event => {
//     event.preventDefault();

//     const normalizedFilter = this.state.name.toLowerCase();
//     const contacts = this.props.contacts;

//     const isPresent = contacts.some(contact => {
//       return contact.name.toLowerCase() === normalizedFilter;
//     });

//     if (isPresent) {
//       alert(`${this.state.name} is already in contacts!`);
//       return;
//     }

//     // це не onSubmit у цьому класі, це проп, в якому знаходиться посилання на метод formSubmitHandler з App
//     // тут генерую унікальну ID кожного разу при натисканні Add contact у формі, при сабміті форми
//     this.props.onSubmit({ ...this.state, id: nanoid() });
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     // console.log(this.props.contacts);
//     return (
//       <section>
//         <Container>
//           <h1>Phonebook</h1>
//           {/* <ContactForm ... /> */}
//           <ContactForm onSubmit={this.onSubmit}>
//             <ContactLabel htmlFor={this.uniqueNameId}>
//               Name:
//               <InputField
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 value={this.state.name}
//                 onChange={this.onInput}
//                 id={this.uniqueNameId}
//                 required
//               />
//             </ContactLabel>
//             <ContactLabel htmlFor={this.uniqueNumberId}>
//               Number:
//               <InputField
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 value={this.state.number}
//                 onChange={this.onInput}
//                 id={this.uniqueNumberId}
//                 required
//               />
//             </ContactLabel>
//             <ContactButton type="submit">Add contact</ContactButton>
//           </ContactForm>
//         </Container>
//       </section>
//     );
//   }
// }

// export default HandleForm;

// HandleForm.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };
