import axios from "axios";

export const searchImages =  async (val) => {
  const response=

      await axios.get(
        'https://api.unsplash.com/search/photos/',
        {
            headers: {
                Authorization: 'Client-ID 61EfJ7zYOIuKm7_AAqxlB2yxLYTtajIUkBesXBICYkk'
            },
            params: {
                query: val
            }
        }
    );

  return response;
}
