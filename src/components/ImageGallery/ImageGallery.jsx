import { getPhotos } from "../../apiServise/photos";
import { useState, useEffect } from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";

export const ImageGallery = ({ query }) => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!query) return;
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
  }, [query, page]);

  return (
    <div>
      <ul>
        {photos.map(({ id, alt_description, urls }) => (
          <li key={id}>
            <ImageCard alt={alt_description} urls={urls} />
          </li>
        ))}
      </ul>
      {photos.length > 0 && <LoadMoreBtn setPage={setPage} />}
    </div>
  );
};
