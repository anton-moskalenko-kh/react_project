import React from 'react';
import styles from './GenresList.module.css'
import {useAppSelector} from "../../redux/store";
import GenreBadge from "../GenreBadge/GenreBadge";
import Error from "../Error/Error";

const GenresList = () => {

    const {genres} = useAppSelector(state => state.genres)

    return (
        <div className={styles.badgeBlock}>
            {genres ? genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)
            : <Error/>}
        </div>
    );
};

export default GenresList;