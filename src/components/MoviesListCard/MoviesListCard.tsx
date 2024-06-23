import React, {FC} from 'react';
import {IMoviesModel} from "../../models/IMoviesModel";
import {Link} from "react-router-dom";
import PosterPreview from "../PosterPreview/PosterPreview";
import {BasicRating} from "../StarsRating/StarsRating";
import styles from './MoviesListCard.module.css'

interface IProps {
    movie: IMoviesModel
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const rating = +movie.vote_average.toFixed(1)

    return (
        <div className={styles.movieCardBlock}>
            <p className={styles.movieTitle}>
                <Link to={movie.id.toString()}>{movie.title}</Link>
            </p>
            <PosterPreview key={movie.id} imgUrl={movie.poster_path} movieId={movie.id.toString()}/>
            <BasicRating value={rating}/>
        </div>
    );
};

export default MoviesListCard;