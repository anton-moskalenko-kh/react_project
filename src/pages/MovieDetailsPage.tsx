import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {moviesActions} from "../redux/slices/moviesSlice";
import MovieInfo from "../components/MovieInfo/MovieInfo";

const MovieDetailsPage = () => {

    const {id} = useParams()
    const dispatch = useAppDispatch()
    const {movie} = useAppSelector(state => state.movies)

    useEffect(() => {
        if (id) {
            dispatch(moviesActions.getMovieInfo(id))
        }
    }, [id]);

    return (
        <div>
            {movie && <MovieInfo movie={movie}/>}
        </div>
    );
};

export default MovieDetailsPage;