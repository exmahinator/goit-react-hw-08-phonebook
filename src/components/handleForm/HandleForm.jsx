import React, { Component } from 'react';
import {
  Container,
  ContactForm,
  ContactLabel,
  ContactButton,
  InputField,
} from 'components/ui';
import { nanoid } from 'nanoid';

class HandleForm extends Component {
  state = {
    name: '',
    number: '',
  };

  uniqueNameId = nanoid();
  uniqueNumberId = nanoid();

  onInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // checkForDuplicate = () => {
  //   const normalizedFilter = this.state.name.toLowerCase();
  //   const contacts = this.props.contacts;
  //   const match = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  //   if (match.length >= 1) {
  //     alert(`${this.state.name} is already in contacts!`);
  //     return;
  //   }
  // };

  onSubmit = event => {
    event.preventDefault();

    // this.checkForDuplicate();

    const normalizedFilter = this.state.name.toLowerCase();
    const contacts = this.props.contacts;
    const match = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    if (match.length >= 1) {
      alert(`${this.state.name} is already in contacts!`);
      return;
    }

    // це не onSubmit у цьому класі, це проп, в якому знаходиться посилання на метод formSubmitHandler з App
    // тут генерую унікальну ID кожного разу при натисканні Add contact у формі, при сабміті форми
    this.props.onSubmit({ ...this.state, id: nanoid() });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <section>
        <Container>
          <h1>Phonebook</h1>
          {/* <ContactForm ... /> */}
          <ContactForm onSubmit={this.onSubmit}>
            <ContactLabel htmlFor={this.uniqueNameId}>
              Name:
              <InputField
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={this.state.name}
                onChange={this.onInput}
                id={this.uniqueNameId}
                required
              />
            </ContactLabel>
            <ContactLabel htmlFor={this.uniqueNumberId}>
              Number:
              <InputField
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={this.state.number}
                onChange={this.onInput}
                id={this.uniqueNumberId}
                required
              />
            </ContactLabel>
            <ContactButton type="submit">Add contact</ContactButton>
          </ContactForm>
        </Container>
      </section>
    );
  }
}

export default HandleForm;
