import axios from "axios";

export const apiUrl = `http://www.omdbapi.com/?apikey=3bb4facb`;

export const fetchMovies = async (name) => {
return  await axios.get(`${apiUrl}&s=${name}`);
};
