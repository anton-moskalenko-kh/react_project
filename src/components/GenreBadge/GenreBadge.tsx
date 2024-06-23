import React, {FC} from 'react';
import styles from './GenreBadge.module.css'
import {IGenreModel} from "../../models/IGenreModel";
import {useNavigate, useSearchParams} from "react-router-dom";

interface IProps {
    genre: IGenreModel
}

const GenreBadge: FC<IProps> = ({genre}) => {

    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    return (
        <div className={styles.badgeBtnBlock}>
                <button className={styles.badgeBtn} onClick={() => {
                    navigate('/movies')
                    setSearchParams({page: '1', with_genres: genre.id.toString()})
                }}>{genre.name}</button>
        </div>
    );
};

export default GenreBadge;