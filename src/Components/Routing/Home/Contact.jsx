import { Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Home_path } from '../Path/RoutingPath'



export const ContactRout = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row  '>
                    <Stack direction="column">
                    <Typography variant='h2' sx={{ fontWeight: "bold", textAlign: "center", color: "darkblue", mt: 20 }}>Welcome Contact  page</Typography>
                        <h3 >MOBILE :9876543210</h3>
                        <h3>email :isro@org.com</h3>
                        <h4>website : www.isro.com</h4>
                    </Stack>

                </div>

                <Link to={Home_path}>Back to home</Link>

            </div>




        </>
    )
}

