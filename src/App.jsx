import { SearchBar } from "./components/SearchBar/SearchBar";
import { Container } from "./components/Container/Container";
import { Section } from "./components/Section/Section";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";

import { useState } from "react";

export default function App() {
  const [query, setSearchText] = useState("");

  const handleSearchSubmit = (text) => {
    setSearchText(text);
  };
  return (
    <Section>
      <Container>
        <div>
          <SearchBar onSubmit={handleSearchSubmit} />
          <ImageGallery query={query} />
        </div>
      </Container>
    </Section>
  );
}
