import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



export const ContactRout = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row  '>
                    <Typography variant='h2' sx={{ fontWeight: "bold", textAlign: "center", color: "darkblue", mt: 20 }}>Welcome Contact  page</Typography>
                    <h1 className=''>MOBILE :9876543210</h1>
                    <h1>email :isro@org.com</h1>
                    <h1>website : www.isro.com</h1>

                </div>

                <Link to="/">Back to home</Link>

            </div>  




        </>
    )
}

