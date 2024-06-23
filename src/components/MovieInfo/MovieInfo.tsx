import React, {FC} from 'react';
import {IMovieInfoModel} from "../../models/IMovieInfoModel";
import GenreBadge from "../GenreBadge/GenreBadge";
import PosterPreview from "../PosterPreview/PosterPreview";
import styles from './MovieInfo.module.css'
import {BasicRating} from "../StarsRating/StarsRating";

interface IProps {
    movie: IMovieInfoModel
}

const MovieInfo:FC<IProps> = ({movie}) => {

    const rating = +movie.vote_average.toFixed(1)

    return (
        <div className={styles.movieInfoBlock}>
            <div className={styles.posterSection}>
                <PosterPreview imgUrl={movie.poster_path} movieId={''}/>
                <BasicRating value={rating}/>
                <p><span>Count of vote:</span> {movie.vote_count}</p>
            </div>
            <div className={styles.infoSection}>
                <h3 className={styles.title}>{movie.title}</h3>
                <p className={styles.overview}>{movie.overview}</p>
                <p><span>Release Date:</span> {movie.release_date}</p>
                <div className={styles.genresListBlock}>{movie.genres.map((genre, index) => <GenreBadge key={index} genre={genre}/>)}</div>
                <p><span>Budget:</span> {movie.budget} $</p>
                <p><span>Revenue:</span> {movie.revenue} $</p>
                <p><span>Duration: </span>{movie.runtime} min</p>
                <p><span>Status: </span>{movie.status}</p>
            </div>
        </div>
    );
};

export default MovieInfo;