import style from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <p className={style.label}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
