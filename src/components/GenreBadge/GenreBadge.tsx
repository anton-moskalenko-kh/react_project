import React, {FC} from 'react';
import styles from './GenreBadge.module.css'
import {IGenreModel} from "../../models/IGenreModel";
import {useSearchParams} from "react-router-dom";

interface IProps {
    genre: IGenreModel
}

const GenreBadge: FC<IProps> = ({genre}) => {

    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <div className={styles.badgeBtn}>
            <button onClick={() => {
                setSearchParams({page: '1', with_genres: genre.id.toString()})
            }}>{genre.name}</button>
        </div>
    );
};

export default GenreBadge;