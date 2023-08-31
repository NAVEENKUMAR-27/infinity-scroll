import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
    
    return (
        <>
            <AppBar position='static'>
                <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography variant='h'>ROUTING TASK</Typography>

                <Box sx={{ display:'flex' , alignItems: "center" ,gap:"50px"}}>
                    <NavLink   to="/">Home</NavLink>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                    <NavLink to="/Url">Details</NavLink>
                </Box>
                </Toolbar>


            </AppBar>

        </>
    )
}

