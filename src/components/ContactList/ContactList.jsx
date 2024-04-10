import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={style.ContactList}>
      {contacts.map((contact) => (
        <li className={style.contactItem} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            deletedContact={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}
