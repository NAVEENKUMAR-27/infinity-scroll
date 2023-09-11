import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Box, Button, Card, Grid, Stack, TextField, Typography } from '@mui/material'
import "./FetchStyle.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LineWave, ThreeDots } from 'react-loader-spinner';
import { Api_Url } from './Api';



const FetchData = () => {
    const [fetchMethod, setFetchMethod] = useState([])
    const [axiosMethod, setAxiosMethod] = useState([])
    const [fetchName, setFetchName] = useState()
    const [axiosName, setAxiosName] = useState('')
    const [axiosEmail, setAxiosEmail] = useState('')
    const [axiosUser, setAxiosUser] = useState('')


    var slNo = 10


    /*Axios get method*/

    useEffect(() => {
        Axios.get(Api_Url)
            .then(responce => setAxiosMethod(responce.data))
            .catch(err => { console.log(err, "Check Api get link maybe its mistake") })
    }, [])


    /*fetch get method*/
    useEffect(() => {
        fetch(Api_Url)
            .then(res => res.json())
            .then(data => setFetchMethod(data))
    }, [])


    /*Axios post Method*/
    const axiosPost = () => {
        slNo++;
        Axios.post(Api_Url, { id: slNo, name: axiosName, username: axiosUser, email: axiosEmail })
            .then((res) => {
                setAxiosMethod([...axiosMethod, res.data]);
                setAxiosName('');
            })
            .catch((err) => {
                console.error("Error creating the user:", err);
            });
    }

    console.log(axiosMethod)

    /*table Component style*/
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 15,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));




    return (
        <>
            <Grid container>
                <Grid xs={12}>
                    <Typography variant='h4' className='heading_api mt-5' >API FETCH METHOD</Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid xl={6}>
                        <Typography variant='h6' className='heading_methods mt-5 text-success' >Fetch  Method </Typography>
                        <Grid xs={12}>
                            <TableContainer component={Paper} sx={{ mt: 3, maxWidth: 600, ml: 11 }}>
                                <Table sx={{ alignContent: "center" }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="left">Sl.No</StyledTableCell>
                                            <StyledTableCell align="left">Name</StyledTableCell>
                                            <StyledTableCell align="left">UserName</StyledTableCell>
                                            <StyledTableCell align="center">Mail&nbsp;</StyledTableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {fetchMethod?.length > 0 ? (
                                            fetchMethod?.map((row) => (
                                                <StyledTableRow key={row.id}>
                                                    <StyledTableCell align="center"> {row.id}</StyledTableCell>
                                                    <StyledTableCell align="left" > {row.name}</StyledTableCell>
                                                    <StyledTableCell align="center">{row.username}</StyledTableCell>
                                                    <StyledTableCell align="center">{row.email}</StyledTableCell>

                                                </StyledTableRow>
                                            ))) : (
                                            <LineWave
                                                height="80"
                                                width="100"
                                                radius="9"
                                                color="green"
                                                ariaLabel="loading"
                                                wrapperStyle
                                                wrapperClass="loading_dots"
                                            />
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Stack direction="column  " spacing={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 6, pb: 6 }}>
                                <Typography variant='h6' sx={{ fontWeight: "bold", color: "green" }}>Post Method in Fetch</Typography>
                                <TextField variant='outlined' label="Add Name" />
                                <Button variant="contained" size='small' sx={{ backgroundColor: "black", color: "red" }}>Post</Button>

                            </Stack>

                        </Grid>

                    </Grid>
                    <Grid xl={6}>
                        <Typography variant='h6' className='heading_methods mt-5 text-danger' >Axios Method</Typography>
                        <Grid xs={12}>
                            <TableContainer component={Paper} sx={{ mt: 3, maxWidth: 600, ml: 11 }}>
                                <Table sx={{ alignContent: "center" }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="left">Sl.No</StyledTableCell>
                                            <StyledTableCell align="left">Name</StyledTableCell>
                                            <StyledTableCell align="left">UserName</StyledTableCell>
                                            <StyledTableCell align="center">Mail&nbsp;</StyledTableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {axiosMethod?.length > 0 ? (
                                            axiosMethod?.map((row) => (
                                                <StyledTableRow key={row.id}>
                                                    <StyledTableCell align="center"> {row.id}</StyledTableCell>
                                                    <StyledTableCell align="left" > {row.name}</StyledTableCell>
                                                    <StyledTableCell align="center">{row.username}</StyledTableCell>
                                                    <StyledTableCell align="center">{row.email}</StyledTableCell>

                                                </StyledTableRow>
                                            ))) : (
                                            <ThreeDots
                                                height="80"
                                                width="100"
                                                radius="9"
                                                color="red"
                                                ariaLabel="loading"
                                                wrapperStyle
                                                wrapperClass="loading_dots"
                                            />
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Stack direction="column" spacing={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 6, pb: 6 }}>
                                <Typography variant='h6' sx={{ fontWeight: "bold", color: "red" }}>Post Method in Axios</Typography>
                                <TextField variant='outlined' label="Name" value={axiosName} onChange={(e) => setAxiosName(e.target.value)} />
                                <TextField variant='outlined' label="UserName" value={axiosUser} onChange={(e) => setAxiosUser(e.target.value)} />
                                <TextField variant='outlined' label="Email" value={axiosEmail} onChange={(e) => setAxiosEmail(e.target.value)} />

                                <Button variant="contained" size='small' sx={{ backgroundColor: "yellow", color: "red" }} onClick={axiosPost}>Post</Button>

                            </Stack>


                        </Grid>

                    </Grid>

                </Grid>

            </Grid>




        </>
    )
}

export default FetchData