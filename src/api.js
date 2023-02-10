import axios from "axios";

export const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            "Authorization": 'Client-ID 61EfJ7zYOIuKm7_AAqxlB2yxLYTtajIUkBesXBICYkk',
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        params: {
            query: term.termSearch,
            page: term.page,
        },
    });
    return response.data.results;
}
