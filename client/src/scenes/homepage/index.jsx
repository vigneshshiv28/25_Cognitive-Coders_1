import { Box, Typography, useMediaQuery } from '@mui/material';
import Navbar from '../navbar/index';
import IntroWidget from '../../widgets/Intro';
import Lottie from 'lottie-react';
import myAnimation from '../../animations/robot.json';

const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1200px)");

    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="1rem"
                marginTop={isNonMobileScreens ? "1rem" : "2rem"}
                justifyContent="center"
            >
                <Box flexBasis={isNonMobileScreens ? "30%" : "50%"} marginTop={isNonMobileScreens ? "9rem" : "1rem"}>
                    <IntroWidget />
                </Box>

                <div style={{ height: "600px" }}>
                    <Lottie animationData={myAnimation} loop autoplay style={{ height: "100%" }} />
                </div>
            </Box>

            <Typography variant='h3' fontWeight='300' textAlign="center" fontFamily="calibri">
                Team Members
            </Typography>


            {isNonMobileScreens && (
                <Box
                    width="100%"
                    display={isNonMobileScreens ? "flex" : "block"}
                    gap="1rem"
                    marginTop={isNonMobileScreens ? "2rem" : "2rem"}
                    justifyContent="start"
                >
                    <Box
                        flexBasis={isNonMobileScreens ? "25%" : "20%"}
                        marginLeft={isNonMobileScreens ? "3rem" : "2rem"}
                        sx={{
                            background: 'linear-gradient(45deg, #00FFFF, #00FF7F)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontWeight='500' textAlign="center"
                            color="black">
                            Vignesh Shivhare
                        </Typography>
                    </Box>

                    <Box
                        flexBasis={isNonMobileScreens ? "25%" : "50%"}
                        marginLeft={isNonMobileScreens ? "3rem" : "20rem"}
                        sx={{
                            background: 'linear-gradient(45deg, #00FFFF, #00FF7F)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontWeight='500' textAlign="center"
                            color="black">
                            Manas Deshpande
                        </Typography>
                    </Box>

                    <Box
                        flexBasis={isNonMobileScreens ? "25%" : "50%"}
                        marginLeft={isNonMobileScreens ? "3rem" : "20rem"}
                        sx={{
                            background: 'linear-gradient(45deg, #00FFFF, #00FF7F)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontWeight='500' textAlign="center"
                            color="black">
                            Nihaal Nayak
                        </Typography>
                    </Box>

                    <Box
                        flexBasis={isNonMobileScreens ? "25%" : "50%"}
                        marginLeft={isNonMobileScreens ? "3rem" : "20rem"}
                        sx={{
                            background: 'linear-gradient(45deg, #00FFFF, #00FF7F)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontWeight='500' textAlign="center"
                            color="black">
                            Vedant Kalwar
                        </Typography>
                    </Box>
                </Box>
            )}

            {!isNonMobileScreens && (
                <Box
                    width="60%"
                    display="block"
                    gap="3rem"
                    marginTop={isNonMobileScreens ? "1rem" : "2rem"}
                    alignContent="center"
                    justifyContent="center"
                    sx={{ margin: 'auto' }} // Center the box horizontally and vertically
                >
                    <Box
                        
                        flexBasis={isNonMobileScreens ? "25%" : "20%"}
                        marginTop="2rem"
                        sx={{
                            background: 'linear-gradient(45deg, #00FFFF, #00FF7F)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontWeight='500' textAlign="center" color="black">
                            Vignesh Shivhare
                        </Typography>
                    </Box>

                    <Box
                        
                        flexBasis={isNonMobileScreens ? "25%" : "20%"}
                        marginTop="2rem"
                        sx={{
                            background: 'linear-gradient(45deg, #00FFFF, #00FF7F)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontWeight='500' textAlign="center" color="black">
                        Manas Deshpande
                        </Typography>
                    </Box>

                    <Box
                        
                        flexBasis={isNonMobileScreens ? "25%" : "20%"}
                        marginTop="2rem"
                        sx={{
                            background: 'linear-gradient(45deg, #00FFFF, #00FF7F)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontWeight='500' textAlign="center" color="black">
                        Nihaal Nayak
                        </Typography>
                    </Box>

                    <Box
                        
                        flexBasis={isNonMobileScreens ? "25%" : "20%"}
                        marginTop="2rem"
                        sx={{
                            background: 'linear-gradient(45deg, #00FFFF, #00FF7F)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontWeight='500' textAlign="center" color="black">
                        Vedant Kalwar
                        </Typography>
                    </Box>
                </Box>
            )}


        </Box>
    );
};

export default HomePage;
