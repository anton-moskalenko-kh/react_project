import React from 'react';
import styles from './GenresList.module.css'
import {useAppSelector} from "../../redux/store";
import GenreBadge from "../GenreBadge/GenreBadge";

const GenresList = () => {

    const {genres, error} = useAppSelector(state => state.genres)

    return (
        <div className={styles.badgeBlock}>
            {genres && genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
            {error && <div>Something was happened</div>}
        </div>
    );
};

export default GenresList;