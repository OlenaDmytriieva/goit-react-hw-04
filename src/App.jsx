import { SearchBar } from "./components/SearchBar/SearchBar";
import { Container } from "./components/Container/Container";
import { Section } from "./components/Section/Section";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";

import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");

  const onFormSubmit = (query) => {
    setQuery(query);
  };

  return (
    <Section>
      <Container>
        <div>
          <SearchBar onSubmit={onFormSubmit} />
          <ImageGallery query={query} />
        </div>
      </Container>
    </Section>
  );
}
