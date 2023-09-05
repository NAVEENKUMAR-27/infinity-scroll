import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh', 
            }}
        >
            <Grid item xs={12} sx={{ alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h1' sx={{color:"red",fontWeight:"bold"}}>404  Error</Typography>
                    <Typography variant='h4'>This Page doesn't exsit</Typography>
                    <Link to="/" variant='h6'>Return back to home</Link>
                </Box>
            </Grid>
        </Box>
    );
};
