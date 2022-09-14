import React, { useState, useEffect, useMemo } from 'react';
import { ContactsList } from './Contacts-list';
import { Form } from './Form';
import { Filter } from './Filter';
import { Section } from './Section';
import { EmptyNotification } from './Empty-notification';

export const App = () => {
  const [contacts, setContacts] = useState(()=> JSON.parse(
      localStorage.getItem('contacts') )?? []);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = e => {
    setFilter( e.currentTarget.value);
  };

  const handleDeleteBtn = idToDelete => {
    setContacts(prevState => 
      prevState.filter(({ id }) => id !== idToDelete))
    
  };
  
  const handleFormSubmit = newContact => {
    if (contacts.some(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    setContacts(prevState => [...prevState, newContact]);
    console.log(contacts)
  };



  const filteredContacts = useMemo(() => {
    console.log('hihihhih')
    return contacts.length
    ? contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase())
    } )
    : [];
  }, [contacts, filter])
  return (
    <div>
      <h1>Phone Book</h1>
      <Section>
        <Form onSubmit={handleFormSubmit} />
      </Section>
      <Section>
        <h2>Contacts</h2>
        {contacts.length ? (
          <>
            <Filter filter={filter} filterHandler={handleFilter} />
            <ContactsList
              contacts={filteredContacts}
              onDeleteBtn={handleDeleteBtn}
            />
          </>
        ) : (
          <EmptyNotification />
        )}
      </Section>
    </div>
  );
};

