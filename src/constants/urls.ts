const baseUrl = 'https://api.themoviedb.org/3'

const movies = '/discover/movie'
const searchMovies = '/search/movie'
const genreList = '/genre/movie/list'
const urls = {
    movies: {
        base: movies
    },
    searchMovie: {
        base: searchMovies
    },
    genreList: {
        base:genreList
    }
}

export {
    baseUrl,
    urls
}