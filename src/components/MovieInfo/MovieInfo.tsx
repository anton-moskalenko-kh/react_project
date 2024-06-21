import React, {FC} from 'react';
import {IMovieInfoModel} from "../../models/IMovieInfoModel";
import GenreBadge from "../GenreBadge/GenreBadge";

interface IProps {
    movie: IMovieInfoModel
}

const MovieInfo:FC<IProps> = ({movie}) => {

    return (
        <div>
            <p>{movie.overview}</p>
            <div>{movie.genres.map(genre => <GenreBadge genre={genre}/>)}</div>
        </div>
    );
};

export default MovieInfo;