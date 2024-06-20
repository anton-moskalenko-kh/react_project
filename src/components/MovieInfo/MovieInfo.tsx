import React, {FC} from 'react';
import styles from './MovieInfo.module.css'
import {IMoviesModel} from "../../models/IMoviesModel";
import {Link, useNavigate} from "react-router-dom";

interface IProps {
    movie: IMoviesModel
}

const MovieInfo: FC<IProps> = ({movie}) => {

    return (
        <div>
            <p>
                {movie.title}
                <Link to={movie.id.toString()}></Link>
            </p>

        </div>
    );
};

export default MovieInfo;