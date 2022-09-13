import React, { Component } from "react";
import ContactsList from "./Contacts-list";
import Form from "./Form";
import Filter from "./Filter";
import Section from "./Section";
import EmptyNotification from "./Empty-notification";

export class App extends Component {
  
  state = {
    contacts: [
      
    ],
    filter: '',
  }

  componentDidMount() {
    if (!this.state.contacts.length && (JSON.parse(localStorage.getItem('contacts')))) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts'))
      })
    }
  
}
    componentDidUpdate(prevProps, prevState) {
      if (prevState.contacts !== this.state.contacts) {
         localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
       }
    }

  handleFormSubmit = (data) => {
    if (this.state.contacts.some(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    this.setState(prevState => {
      return {contacts: [...prevState.contacts, data]}
    })
  }
  handleDeleteBtn = (idToDelete) => {
    this.setState(prevState => {
      return {contacts: prevState.contacts.filter(({id}) => id !== idToDelete)}
    })
  }
  handleFilter = (e) => {
  this.setState({filter: e.currentTarget.value})
}
  
  
  render() {

    const { contacts, filter } = this.state;
    const optimizedFilter = filter.toLowerCase();
    let filteredContacts = [];
    if (contacts.length) {
      
      filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(optimizedFilter))
      console.log(filteredContacts)
    }
    
    return (
      <div>
        <h1>Phonebook</h1>
        <Section>
          <Form onSubmit={this.handleFormSubmit} />
        </Section>
        <Section>
          <h2>Contacts</h2>
          {(contacts.length) ? 
          <>
          <Filter filter={filter} filterHandler={this.handleFilter} />
            <ContactsList contacts={filteredContacts} onDeleteBtn={this.handleDeleteBtn} />
            </> :
            <EmptyNotification/>
          }
        {/* <Filter filter={filter} filterHandler={ this.handleFilter} />
          <ContactsList contacts={filteredContacts} onDeleteBtn={this.handleDeleteBtn} /> */}
          
        </Section>
        
      </div>
    );
  }
};
