import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "n7ytfqi7GyqEnf-B9tj3Giz82uQxOlqzKGLS9h8lLZI";

const fetchPhotosWithQuery = async (query, page) => {
  const response = await axios.get(
    `${API_URL}?query=${query}&page=${page}&client_id=${API_KEY}`
  );
  return response.data;
};

export default fetchPhotosWithQuery;
