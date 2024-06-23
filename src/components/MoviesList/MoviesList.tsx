import React from 'react';
import styles from './MoviesList.module.css'
import {useAppSelector} from "../../redux/store";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import Error from "../Error/Error";
import {LinearIndeterminate} from "../Loader/Loader";


const MoviesList = () => {

    const {movies, error, isLoaded} = useAppSelector(state => state.movies)

    return (
        <div className={styles.moviesBlock}>
            {isLoaded
                ? movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                : <LinearIndeterminate/>}
            {error && <Error/>}
        </div>
    );
};

export default MoviesList;