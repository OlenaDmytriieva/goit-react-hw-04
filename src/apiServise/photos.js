import axios from "axios";

// const API_KEY = "TDPRPm7UqZ8pVTZVBZEOKeKNPMQO9BdGMj1FDyslSZI";
// axios.defaults.baseURL = "https://api.unsplash.com/photos/";
// axios.defaults.headers.common["Authorization"] = API_KEY;
// axios.defaults.params = {
//   orientation: "landscape",
//   per_page: 12,
// };

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&orientation=landscape&client_id=TDPRPm7UqZ8pVTZVBZEOKeKNPMQO9BdGMj1FDyslSZI`
  );

  return data;
};
