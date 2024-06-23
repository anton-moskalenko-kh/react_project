import React from 'react';
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import {useAppSelector} from "../redux/store";


const MainLayout = () => {
    const {theme} = useAppSelector(state => state.theme)
    const body = document.querySelector('body') as HTMLBodyElement

    if (theme === 'light') {
        body.classList.remove('dark')
    } else {
        body.classList.add('dark')
    }

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;