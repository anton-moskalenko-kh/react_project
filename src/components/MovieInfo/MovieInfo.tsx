import React, {FC} from 'react';
import {IMovieInfoModel} from "../../models/IMovieInfoModel";

interface IProps {
    movie: IMovieInfoModel
}

const MovieInfo:FC<IProps> = ({movie}) => {

    return (
        <div>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieInfo;