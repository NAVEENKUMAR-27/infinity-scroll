import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Avatar, Card, CardHeader, CardMedia, Fab, Paper } from "@mui/material";
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./style.css"
import { ThreeDots } from 'react-loader-spinner';




export const InfinityTask = () => {
    /*inital state decleared */
    const [img, setImg] = useState([]);
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false)

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
        }, 100); return () => clearTimeout(timer);
    }, [page])

    /*infinity Scroll Function*/
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10)   
        {
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


    return (
        <>

            <div className="container-fluid bg_color_div ">
                <div className="row justify-content-around">

                    {img?.map((data, index) => (
                        <Card className=" col-lg-3 m-2 mt-5 card_img" key={index} component={Paper}>
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

