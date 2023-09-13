import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { auth } from './FireBase'
import { useNavigate } from 'react-router-dom'

export const LoginAuth = ({user,setUserName}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password)
            console.log(email + " " + password)
            navigate('/')
            setUserName(email)

        }
        catch (err) {
            console.log(err)
            alert(err)

        }

    }

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 25 }}>
                <Typography variant='h6'>Login</Typography>
                <Stack direction="row" spacing={5}>
                    <form onSubmit={handleSubmit}>
                        <TextField variant='outlined' label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField variant='outlined' label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button variant="contained" type='submit'>Login</Button>
                    </form>
                </Stack>
            </Box>
        </>
    )
}
