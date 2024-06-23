import React, {useState} from 'react';
import styles from './Header.module.css'
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../redux/store";
import {genresActions} from "../../redux/slices/genresSlice";
import GenresList from "../GenresList/GenresList";
import {ImageAvatars} from "../UserInfo/UserInfo";
import {BasicSwitches} from "../Switcher/Switcher";


type FormInput = {
    movies: string
}
const Header = () => {
    const [, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const [isGenre, setIsGenre] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {handleSubmit,
            register,
            getValues,
            reset} = useForm<FormInput>()

    const search = () => {
        const value = getValues('movies')
        if (value !== '') {
            navigate('/movies')
            setSearchParams({page: '1', query: value.toString()})
        }
        reset()
    };

    const showGenre = (event: React.MouseEvent) => {
        event.preventDefault()
        dispatch(genresActions.loadListOfGenres())
    }


    return (
        <div>
            <header className={styles.headerBlock}>
                <ul className={styles.listBlock}>
                    <li><Link to={`movies?page=1`}
                              onClick={(event) => {
                                    // returnToMain()
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
                <BasicSwitches />
                <ImageAvatars />
            </header>
            {isGenre && <GenresList/>}
        </div>
    );
};

export default Header;