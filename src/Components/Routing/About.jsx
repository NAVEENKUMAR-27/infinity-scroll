import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


export const AboutRoute = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row  '>
                    <Typography variant='h2' sx={{ fontWeight: "bold", textAlign: "center", color: "darkblue", mt: 20 }}>Welcome About page</Typography>
                    <Typography variant='h6' sx={{ mt: 2, textAlign: "center", color: "red" }}> BENGALURU, Aug 31 (Reuters) - India is set to launch its next space venture, a mission to study the sun and its effect on space weather, days after the historical landing of its Chandrayaan-3 space craft on the lunar south pole.
                        Here are highlights of the Indian Space Research Organisation's (ISRO) upcoming and past missions:  The mission aims to observe solar activities and their effects on space weather in real time.
In 2019, the government sanctioned the equivalent of about $46 million for the Aditya-L1 mission. ISRO has not given an official update on costs.</Typography>
                        
                </div>


                    <Link to="/Contact">Go to Contact page</Link>
            </div>




        </>
    )
}

