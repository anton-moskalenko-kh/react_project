import * as React from 'react';
import styles from './UserInfo.module.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export const ImageAvatars = () => {
    return (
        <div className={styles.avatarBlock}>
            <Stack direction="row" >
                <Avatar sx={{bgcolor: '#3176d2'}} src="/broken-image.jpg" />
            </Stack>
            <p>Peter Parker</p>
        </div>
    );
}