import axios from "axios";

export const searchImages = async (term) => {
    console.log('---------term----',term)
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 61EfJ7zYOIuKm7_AAqxlB2yxLYTtajIUkBesXBICYkk',
        },
        params: {
            query: term.termSearch,
            page: term.page,
        },
    });
    return response.data.results;
}