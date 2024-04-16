import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import style from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export const SearchBar = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const notify = () =>
    toast.error("Enter your searching request, please", {
      style: {
        border: "1px solid red",
        backgroundColor: "salmon",
        color: "white",
      },
    });

  function changeText(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") {
      notify();
    } else {
      onSubmit(text);
      setText("");
    }
  }

  return (
    <>
      <Toaster />
      <form className={style.form} onSubmit={handleSubmit}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
          type="text"
          autoComplete="off"
          className={style.input}
          value={text}
          onChange={changeText}
          placeholder="Search images and photos"
          name="search"
          autoFocus
        />
      </form>
    </>
  );
};
