import React from 'react';
import styles from './MoviesList.module.css'
import {useAppSelector} from "../../redux/store";
import MovieInfo from "../MovieInfo/MovieInfo";


const MoviesList = () => {

    const {movies, error} = useAppSelector(state => state.movies)

    return (
        <div>
            {movies && movies.map(movie => <MovieInfo key={movie.id} movie={movie}/>)}
            {error && <div>Something was happened</div>}
        </div>
    );
};

export default MoviesList;