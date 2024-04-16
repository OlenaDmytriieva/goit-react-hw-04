import { getPhotos } from "../../apiServise/photos";
import { useState, useEffect, useRef } from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import style from "./ImageGallery.module.css";

export const ImageGallery = ({ query }) => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const curQuery = useRef("");

  useEffect(() => {
    if (!query) return;
    if (curQuery.current != query) setPhotos([]);
    curQuery.current = query;

    const fetchPhotos = async () => {
      try {
        const photos = await getPhotos(query, page);
        console.log(photos.results);
        setPhotos((prevPhotos) => [...prevPhotos, ...photos.results]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <ul className={style.gallery}>
        {photos.map(({ id, alt_description, urls }) => (
          <li className={style.galleryItem} key={id}>
            <ImageCard alt={alt_description} urls={urls} />
          </li>
        ))}
      </ul>
      {photos.length > 0 && (
        <LoadMoreBtn onClick={onLoadMore} setPage={setPage} />
      )}
    </div>
  );
};
