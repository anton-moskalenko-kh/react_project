import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {FC} from "react";

interface IProps {
    value: number
}

export const BasicRating: FC<IProps> = ({value}) => {


    return (
        <Box>
            <Rating name="customized-10" precision={0.1} max={10} value={value} readOnly />
        </Box>
    );
}
