import { SearchBar } from "./components/SearchBar/SearchBar";
import { Container } from "./components/Container/Container";
import { Section } from "./components/Section/Section";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { getPhotos } from "./apiServise/photos";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { Loader } from "./components/Loader/Loader";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "./components/ImageModal/ImageModal";

import { useState, useEffect, useRef } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const curQuery = useRef("");
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

  const onFormSubmit = (query) => {
    setQuery(query);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Section>
      <Container>
        <div>
          <SearchBar onSubmit={onFormSubmit} />

          {isError && <ErrorMessage />}
          <ImageGallery photos={photos} setSelectedImage={setSelectedImage} />
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
      </Container>
    </Section>
  );
}
