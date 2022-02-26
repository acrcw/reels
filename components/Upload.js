import React from 'react'
import { Button } from '@mui/material'


import LinearProgress from '@mui/material/LinearProgress';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
function upload() {
    return (
        <div className='upload-btn'>
            <Button variant="outlined" startIcon={<LocalMoviesIcon />} fullWidth component="label" style={{ marginTop: '1rem' }}>
                <input type="file" accept="image/*" style={{ display: 'none' }} />
                UPLOAD
            </Button>
            <LinearProgress variant="determinate" value={30} />
        </div>
    )
}

export default upload