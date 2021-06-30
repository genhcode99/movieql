import axios from 'axios'

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(
    'https://yts-proxy.nomadcoders1.now.sh/list_movies.json',
    {
      params: {
        limit: limit,
        minimum_rating: rating,
      },
    },
  )
  return movies
}
