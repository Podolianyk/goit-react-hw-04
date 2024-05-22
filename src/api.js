import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "cx50bD9VZhVIa71auLQeSiPQdGYykeS9Far4f5uiI6Q";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 12,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`/search/photos`, {
    params: {
      query: query,
      page: page,
    },
  });
  console.log(data);
  return data;
};
