import { Box, Container, IconButton, Stack, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QueryUrl = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSearchClick = () => {
        const url = `/search?q=${encodeURIComponent(searchValue)}`
        navigate(url);
    
    }

    return (
        <>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        boxShadow: 8,
                        borderRadius: 5,
                        backgroundColor: " ",
                        px: 5,
                        py: 4,
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant='h5' sx={{ fontWeight: "bold" }}>Search Your URL</Typography>
                    <Stack spacing={5} direction="row" sx={{ mt: 5 }}>
                        <TextField
                            id="outlined-basic"
                            label="Search"
                            variant="outlined"
                            sx={{ mt: 2, color: "blue" }}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <IconButton
                            aria-label="search"
                            size="large"
                            sx={{ color: "blue", fontSize: 40 }}
                            onClick={handleSearchClick}
                        >
                            <SearchIcon fontSize="inherit" />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </>
    );
}

export default QueryUrl;
