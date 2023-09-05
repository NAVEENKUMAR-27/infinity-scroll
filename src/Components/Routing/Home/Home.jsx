import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { About_path } from '../Path/RoutingPath'


export const HomeRoute = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row  '>
                    <Typography variant='h2' sx={{ fontWeight: "bold", textAlign: "center", color: "blue",mt:20 }}>Welcome Home page</Typography>
                    <Typography variant='h6' sx={{ mt: 2, textAlign: "center",color:"green"}}> 1.APXS on-board Ch-3 rover detects the presence of minor elements <br />
                        2.  LIBS confirms the presence of Sulphur (S) on the lunar surface through unambiguous in-situ measurements. <br /> 3. Chandrayaan-3 ROVER: Made in India. Made for the MOON! The Ch-3 Rover ramped down from the Lander and India took a walk on the moon ! More updates soon. <br /> 4. 'I reached my destination and you too!': Chandrayaan-3
                        Chandrayaan-3 has successfully soft-landed on the moon. Congratulations, India! <br /> 5. The Lander Module is in 25 km x 134 km orbit. Powered descent is expected to commence on August 23, 2023, around 1745 Hrs. IST <br />  6. The Lander Module is in 113 km x 157 km orbit around the moon. Second de-boosting is planned for August 20, 2023</Typography>

                </div>

                <div>
                    <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/08/chandrayaan-3-5-1691547437.jpg" alt="no image" height={200} width={200} />
                </div>
                        <Link to={About_path}>Go to About</Link>
            </div>




        </>
    )
}

