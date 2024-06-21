import React, {useEffect, useState} from 'react';
import styles from './Header.module.css'
import {Link, useSearchParams} from "react-router-dom";
import {set, useForm} from "react-hook-form";
import {useAppDispatch} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {genresService} from "../../services/genre.api.service";
import {genresActions} from "../../redux/slices/genresSlice";
import GenresList from "../GenresList/GenresList";
import {ImageAvatars} from "../UserInfo/UserInfo";


type FormInput = {
    movies: string
}
const Header = () => {
    const [query, setQuery] = useSearchParams()
    const [isGenre, setIsGenre] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {handleSubmit,
            register,
            getValues,
            reset} = useForm<FormInput>()

    const search = () => {
        const value = getValues('movies')
        if (value !== '') {
            setQuery({page: '1', query: value.toString()})
        }
        reset()
    };

    const returnToMain = () => {
        setQuery({page: '1'})
    }

    const showGenre = (event: React.MouseEvent) => {
        event.preventDefault()
        dispatch(genresActions.loadListOfGenres())
    }

    return (
        <div>
            <header className={styles.headerBlock}>
                <ul className={styles.listBlock}>
                    <li><Link to={'movies'}
                              onClick={(event) => {
                                    returnToMain()
                              }}>
                        All movies</Link></li>
                    <li><Link to={''}
                              onClick={(event) => {
                                  setIsGenre(!isGenre)
                                  showGenre(event)
                              }}>
                        Genres</Link></li>
                </ul>
                <form onSubmit={handleSubmit(search)}>
                    <input type="text" placeholder={'Enter name of the film'} {...register('movies')}/>
                    <button className={styles.headerButton}>Search</button>
                </form>
                <ImageAvatars />
            </header>
            {isGenre && <GenresList/>}
        </div>
    );
};

export default Header;