import axios from "axios";

export const apiUrl = `http://www.omdbapi.com/?apikey=3bb4facb`;

export const fetchMovies = async (name) => {
return  await axios.get(`${apiUrl}&s=${name}`);
};

export const fetchMovie = async (id) => {

    console.log('---------data logging--------',id);
    return await axios.get(`${apiUrl}&i=${id}`);
}