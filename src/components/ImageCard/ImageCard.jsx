import style from "./ImageCard.module.css";

export const ImageCard = ({ alt, urls }) => {
  return (
    <div>
      <img className={style.card} src={urls.small} alt={alt} />
    </div>
  );
};
