import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {FC} from "react";
import './StarsRating.css'
import {useAppSelector} from "../../redux/store";

interface IProps {
    value: number,
}

export const BasicRating: FC<IProps> = ({value}) => {
    const {theme} = useAppSelector(state => state.theme)

    return (
        <Box>
            <div className={`ratingBlock ${theme}`}>
                <Rating name="customized-10" precision={0.1} max={10} value={value} readOnly sx={{margin: '0 10px 0 0'}} />
                <span className={'ratingValue'}>{value}</span>
            </div>
        </Box>
    );
}
