import { useState } from "react";
import style from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = () => {
  const [page, setPage] = useState(1);

  const onLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <button className={style.LoadMoreBtn} onClick={onLoadMore}>
        Load more...
      </button>
    </>
  );
};
