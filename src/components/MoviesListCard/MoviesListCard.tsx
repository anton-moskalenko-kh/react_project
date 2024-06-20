import React, {FC} from 'react';
import styles from './MovieInfo.module.css'
import {IMoviesModel} from "../../models/IMoviesModel";
import {Link} from "react-router-dom";
import PosterPreview from "../PosterPreview/PosterPreview";

interface IProps {
    movie: IMoviesModel
}

const MoviesListCard: FC<IProps> = ({movie}) => {

    return (
        <div>
            <p>
                <Link to={movie.id.toString()}>{movie.title}</Link>
            </p>
            <PosterPreview key={movie.id} imgUrl={movie.poster_path}/>
        </div>
    );
};

export default MoviesListCard;