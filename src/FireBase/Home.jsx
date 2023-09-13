import React from 'react'
import { auth } from './FireBase'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


export const HomeAuth = ({user,setUserName}) => {
    const Navigate=useNavigate()

    const HandleLogout = async ()=>{
        try{
            await  auth.signOut()
            setUserName("Guest")
            Navigate("/Login")
            
        }
        catch(err){
            console.error(err)
            alert(err)
        }
    }
    return (
        <>
        <div>
            <h1>Welcome to the home page</h1>
            <h4 className='d-flex ml-5'> Hello User <span className='font-weight-bold text-success'> {user}</span></h4>

            <Button variant='contained' sx={{backgroundColor:"red",color:"white",mt:5}} onClick={HandleLogout}>Log out</Button>
        </div>
        
        
        </>
    )
}
