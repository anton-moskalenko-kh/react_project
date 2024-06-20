const baseUrl = 'https://api.themoviedb.org/3'
const posters = 'https://image.tmdb.org/t/p/w500'

const movies = '/discover/movie'
const searchMovies = '/search/movie'
const genreList = '/genre/movie/list'
const movieById = '/movie/'
const urls = {
    movies: {
        base: movies
    },
    searchMovie: {
        base: searchMovies
    },
    genreList: {
        base:genreList
    },
    movieById: {
        base: movieById
    }

}

export {
    baseUrl,
    posters,
    urls
}