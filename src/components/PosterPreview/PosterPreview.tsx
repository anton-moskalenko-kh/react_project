import React, {FC} from 'react';
import styles from './PosterPreview.module.css'
import {posters} from "../../constants/urls";
import {Link} from "react-router-dom";

interface IProps {
    imgUrl: string,
    movieId: string
}

const PosterPreview: FC<IProps> = ({imgUrl, movieId}) => {
    return (
        <div className={styles.posterBlock}>
            <Link to={movieId}><img src={posters + imgUrl} alt="poster"/></Link>
        </div>
    );
};

export default PosterPreview;