import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter'


class App extends Component  {
  state = {
  contacts: [
      { id: 'id-1', name: 'Богдан Гусак', number: '459-12-56' },
      { id: 'id-2', name: 'Євген Міщук', number: '443-89-12' },
      { id: 'id-3', name: 'Мурзін Олександр', number: '645-17-79' },
      { id: 'id-4', name: 'Романов Олександр', number: '227-91-26' },
    ],
  filter: '',
  }

  handleFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  }

  allContacts = value => {
    const filterNormilize = value.toLowerCase();

    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterNormilize);
    });
  }

  formSubmit = ({ name, number }) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const isContact = contacts.find(contact => contact.name === name);

      if (isContact) {
        alert(`${name} is already in contacts`);
        return contacts;
      } else {
        return {
          contacts: [
            {
              id: nanoid(),
              name,
              number,
            },
            ...contacts,
          ],
        };
      };
    });
  };

  contactDelete = id => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const contactsAfterDelete = contacts.filter(contact => contact.id !== id);
      return { contacts: [...contactsAfterDelete] };
    })
  }

  
  
  
  render() {
    const { filter } = this.state;
    return (
      <div className="container">
        <h1>Phone Book</h1>
        <Form onSubmit={this.formSubmit} />

        <h2>Contacts</h2>
        <Filter title="Find contact by name"
          onChange={this.handleFilter}
        value={filter}
        />
        <ContactList allContacts={this.allContacts(filter)}
        onDelete={this.contactDelete}
        />
      </div>
    )
  }
};


export { App };