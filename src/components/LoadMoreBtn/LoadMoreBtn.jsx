// import { useState } from "react";
import style from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={style.LoadMoreBtn} onClick={onClick}>
      Load more...
    </button>
  );
};
