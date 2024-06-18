import React from 'react';
import styles from './Header.module.css'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const Header = () => {

    const {handleSubmit, register} = useForm()

    const search = () => {

    };

    return (
        <div>
            <ul>
                <li><Link to={'movies'}>All films</Link></li>
                <li><Link to={'genres'}>Genres</Link></li>
            </ul>
            <form onSubmit={handleSubmit(search)}>
                <input type="text" placeholder={'Enter name of the film'} {...register('films')}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export default Header;