import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle";
import { Autocomplete, Avatar, Box, Card, CardHeader, CardMedia, Fab, Paper, Stack, TextField, Typography } from "@mui/material";
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./style.css"
import { ThreeDots } from 'react-loader-spinner';




const Home = () => {
    /*inital state decleared */
    const [img, setImg] = useState([]);
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false)
    const [searchItem, setSearchItem] = useState("")

    /*fetch the data from api*/
    const fetchData = async () => {
        try {
            const apiurl = `https://pixabay.com/api/?key=38884724-752fe88fb801dec4eac904e38&q=yellow+flowers&image_type=photo&pretty=true&page=${page}`;
            const response = await axios.get(apiurl);
            const newImages = response.data.hits;

            if (page === 1) {
                setImg(newImages);
            } else {
                setImg((prevImages) => [...prevImages, ...newImages]);
            }
        } catch (error) {
            console.error('Error fetching image URLs:', error);
        }
    };
    /*page Loading function*/
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, 50); return () => clearTimeout(timer);
    }, [page])

    /*infinity Scroll Function*/
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    /*Scroll top button Function*/

    const fabStyle = {
        position: 'fixed',
        bottom: 30,
        right: 30,
        bgcolor: 'green'
    };

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);

    /*Fillter option function*/

    const handleSearchChange = (event) => {
        setSearchItem(event.target.value);
    };
    const filteredImages = img.filter(image => image.user.toLowerCase().includes(searchItem.toLowerCase()));



    return (
        <>

            <div className="container-fluid bg_color_div ">
                <div className='row sticky-top'>
                    <div className='col-lg-12  '>
                        <nav class="navbar navbar-expand-lg navbar-dark nav_bg  ">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="nav-item ">
                                        <h1 className='font-weight-bold text-center active  text-white'>INFINITY SCROLL TASK</h1>

                                    </li>
                                </ul>
                                <form class="form-inline my-2 my-lg-0">
                                    <input
                                        className="form-control mr-sm-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        value={searchItem}
                                        onChange={handleSearchChange}
                                        size={22}

                                    />

                                </form>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="row justify-content-around">

                    {filteredImages?.map((data, index) => (


                        <Card className=" col-lg-3 col-md-4 col-sm-12 m-2 mt-5 card_img" key={index} component={Paper}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={data.webformatURL}
                                alt="Paella dish"
                                loading='lazy'
                            />
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: 'GREEN' }} aria-label="recipe" src={data.userImageURL} className='.avatar_bg' />
                                }
                                title={data.user}
                                subheader="Author"

                            />

                        </Card>
                    ))}
                </div>

                            <Fab size="large" aria-label='Expand' color='inherit' style={{ ...fabStyle, display: visible ? 'inline' : 'none', backgroundColor: 'white' }} onClick={scrollToTop} >
                                <UpIcon sx={{ fontSize: 30, fontWeight: 'bolder', color: 'blue' }} />
                            </Fab>


                <div >
                    <ThreeDots
                        height="80"
                        width="100"
                        radius="9"
                        color="red"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass="loading_dots"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
