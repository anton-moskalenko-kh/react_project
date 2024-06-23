import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import styles from './MoviesDetailPage.module.css'
import {LinearIndeterminate} from "../../components/Loader/Loader";

const MovieDetailsPage = () => {

    const {id} = useParams()
    const dispatch = useAppDispatch()
    const {movie} = useAppSelector(state => state.movies)

    useEffect(() => {
        if (id) {
            dispatch(moviesActions.clearMovieInfo())
            dispatch(moviesActions.getMovieInfo(id))
        }
    }, [dispatch, id]);

    return (
        <div className={styles.movieInfoBlock}>
            {movie ? <MovieInfo movie={movie}/>
                    : <LinearIndeterminate/>}
        </div>
    );
};

export default MovieDetailsPage;