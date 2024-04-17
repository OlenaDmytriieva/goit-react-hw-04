import style from "./ImageCard.module.css";

export const ImageCard = ({
  alt_description,
  urls,
  likes,
  user,
  setSelectedImage,
}) => {
  return (
    <div>
      <img
        className={style.card}
        src={urls.small}
        alt={alt_description}
        onClick={() => setSelectedImage({ urls, alt_description, likes, user })}
      />
    </div>
  );
};
