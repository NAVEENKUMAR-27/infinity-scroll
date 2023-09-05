import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { About_path, Contact_path, Home_path, Infinity_path, Login_path, Query_path, Url_path } from '../Path/RoutingPath'
import"./NavStyle.css"



export const NavBar = () => {

    const handleClickDelte = () => {
        localStorage.clear()
    }

    return (
        <>
            <AppBar position='static'>
                <Container>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between", color: "white" }}>
                        <Typography variant='h'>ROUTING TASK</Typography>

                        <Box sx={{ display: 'flex', alignItems: "center", gap: "45px" }}>
                            <NavLink to={Home_path}  className="navlink">Home</NavLink>
                            <NavLink to={About_path}  className="navlink">About</NavLink>
                            <NavLink to={Contact_path}  className="navlink">Contact</NavLink>
                            <NavLink to={Url_path}  className="navlink">Details</NavLink>
                            <NavLink to={Query_path}  className="navlink">Query URL</NavLink>
                            <NavLink to={Infinity_path}  className="navlink">InfityScroll</NavLink>
                            <NavLink to={Login_path} onClick={handleClickDelte} style={{ color: "red", fontWeight: "bold" }} className="navlink">Logout</NavLink>


                        </Box>
                    </Toolbar>
                </Container>


            </AppBar>

        </>
    )
}

