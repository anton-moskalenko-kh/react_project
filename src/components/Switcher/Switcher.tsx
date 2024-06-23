import * as React from 'react';
import Switch from '@mui/material/Switch';

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {themeActions} from "../../redux/slices/themeSlice";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const BasicSwitches = () => {
    const dispatch = useAppDispatch()
    const {theme} = useAppSelector(state => state.theme)

    const changeTheme = (): void => {
        if (theme === 'light') {
            dispatch(themeActions.changeTheme('dark'))
        }
        if (theme === 'dark') {
            dispatch(themeActions.changeTheme('light'))
        }
    }

    return (
        <div>
            <Switch {...label} onChange={changeTheme}/>
            <div>Change theme</div>
        </div>
    );
}