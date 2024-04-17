import { ImageCard } from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

export const ImageGallery = ({ photos, setSelectedImage }) => {
  return (
    <div>
      <ul className={style.gallery}>
        {photos.map(({ id, alt_description, urls, likes, user }) => (
          <li className={style.galleryItem} key={id}>
            <ImageCard
              alt={alt_description}
              urls={urls}
              likes={likes}
              user={user}
              setSelectedImage={setSelectedImage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
