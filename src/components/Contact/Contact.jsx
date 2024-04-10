import style from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";

export default function Contact({ id, name, number, deletedContact }) {
  return (
    <div className={style.contactCard}>
      <div className={style.contactWrap}>
        <div className={style.contactString}>
          <FaUser className={style.icon} size={16} />
          <p>{name}</p>
        </div>
        <div className={style.contactString}>
          <FaPhone className={style.icon} size={16} />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => {
          deletedContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
