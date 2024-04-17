import { getPhotos } from "../../apiServise/photos";
import { useState, useEffect, useRef } from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "../ImageModal/ImageModal";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Loader } from "../Loader/Loader";
import style from "./ImageGallery.module.css";

export const ImageGallery = ({ query }) => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const curQuery = useRef("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setloading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) return;
    if (curQuery.current != query) setPhotos([]);
    curQuery.current = query;

    setloading(true);
    const fetchPhotos = async () => {
      try {
        const photos = await getPhotos(query, page);
        console.log(photos.results);
        setPhotos((prevPhotos) => [...prevPhotos, ...photos.results]);
      } catch (error) {
        setIsError(true);
        console.log(error.message);
      } finally {
        setloading(false);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (selectedImage) => {
    setSelectedImage(selectedImage);
    console.log(selectedImage);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {isError && <ErrorMessage />}
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
      {loading && <Loader />}
      {photos.length > 0 && (
        <LoadMoreBtn onClick={onLoadMore} setPage={setPage} />
      )}
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
