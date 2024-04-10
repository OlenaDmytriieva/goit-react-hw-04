import ContactForm from "./components/ContactForm/ContactForm";
import { Container } from "./components/Container/Container";
import { Section } from "./components/Section/Section";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
// import contactsData from "./data/contacts.json";
import { useState, useEffect } from "react";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    return storedContacts || [];
  });

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter(
        (contact) => contact.id !== contactId
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Section>
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAdd={addContact} />
          <SearchBox value={filter} onFilter={setFilter} />
          <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        </div>
      </Container>
    </Section>
  );
}
