import { useState } from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import { ImageModal } from "../ImageModal/ImageModal";
import style from "./ImageGallery.module.css";

export const ImageGallery = ({ photos }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (selectedImage) => {
    setSelectedImage(selectedImage);
    console.log(selectedImage);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <ul className={style.gallery}>
        {photos.map(({ id, alt_description, urls, likes, user }) => (
          <li
            className={style.galleryItem}
            key={id}
            onClick={() => openModal({ urls, alt_description, likes, user })}
          >
            <ImageCard alt={alt_description} urls={urls} />
          </li>
        ))}
      </ul>

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          closeModal={closeModal}
          imageUrl={selectedImage.urls.regular}
          alt="Regular photo"
          author={selectedImage.user.name}
          likes={selectedImage.likes}
        />
      )}
    </div>
  );
};
