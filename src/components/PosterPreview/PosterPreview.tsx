import React, {FC} from 'react';
import styles from './PosterPreview.module.css'
import {posters} from "../../constants/urls";

interface IProps {
    imgUrl: string
}

const PosterPreview: FC<IProps> = ({imgUrl}) => {
    return (
        <div>
            <img src={posters + imgUrl} alt="poster"/>
        </div>
    );
};

export default PosterPreview;