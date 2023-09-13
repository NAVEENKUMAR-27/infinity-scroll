import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { auth } from './FireBase'
import { useNavigate } from 'react-router-dom'

export const RegisterAuth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Navigate=useNavigate()

    const handleRegister = async () => {
        try{
            await auth.createUserWithEmailAndPassword(email,password)
            alert("successfull register")
            Navigate('/login')

        }
        catch(err){
            console.log(err)
            alert(err)
        }

    }

    return (
        <>
            <Box sx={{ display: "row-flex", justifyContent: "center", mt: 25 }}>
                <Typography variant='h6'>Register page</Typography>
                <Stack direction="row" spacing={5}>
                    <form onSubmit={handleRegister}>
                        <TextField variant='outlined' label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField variant='outlined' label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button variant="contained" type='submit'>Register</Button>
                    </form>
                </Stack>
            </Box>



        </>
    )
}

