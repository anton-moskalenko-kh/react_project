import React, {FC} from 'react';
import styles from './MovieInfo.module.css'
import {IMoviesModel} from "../../models/IMoviesModel";

interface IProps {
    movie: IMoviesModel
}

const MovieInfo: FC<IProps> = ({movie}) => {
    return (
        <div>
            <p>{movie.title}</p>
        </div>
    );
};

export default MovieInfo;