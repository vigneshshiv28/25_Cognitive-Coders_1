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
                gap="2rem"
                marginTop={isNonMobileScreens ? "1rem" : "2rem"}
                marginLeft="4rem"
                justifyContent="center"
            >
                <Box flexBasis={isNonMobileScreens ? "50%" : "50%"} marginTop={isNonMobileScreens ? "9rem" : "1rem"}>
                    <IntroWidget />
                </Box>

                <div style={{ height: "750px", marginRight: isNonMobileScreens ? undefined : "10rem" }}>
                    <Lottie animationData={myAnimation} loop autoplay style={{ height: "100%" }} />
                </div>

            </Box>

            <Typography
                variant='h3'
                fontWeight='300'
                textAlign="center"
                fontFamily="Cormorant Garamond"
                sx={{ textDecoration: 'underline' }}
            >
                TESTIMONIALS
            </Typography>



            {isNonMobileScreens && (
                <Box
                    width="100%"
                    display={isNonMobileScreens ? "flex" : "block"}
                    gap="1rem"
                    justifyContent="start"
                    marginTop="4rem"
                    
                >
                    <Box
                        flexBasis={isNonMobileScreens ? "25%" : "20%"}
                        marginLeft={isNonMobileScreens ? "1rem" : "2rem"}
                        sx={{
                            background: 'linear-gradient(45deg, blue, blueviolet, violet)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontFamily="Crimson Text" fontWeight='500' textAlign="center" color="white">
                            Vignesh Shivhare
                        </Typography>
                    </Box>

                    <Box
                        flexBasis={isNonMobileScreens ? "25%" : "50%"}
                        marginLeft={isNonMobileScreens ? "1rem" : "20rem"}
                        sx={{
                            background: 'linear-gradient(45deg, blue, blueviolet, violet)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontFamily="Crimson Text" fontWeight='500' textAlign="center" color="white">
                            Manas Deshpande
                        </Typography>
                    </Box>

                    <Box
                        flexBasis={isNonMobileScreens ? "25%" : "50%"}
                        marginLeft={isNonMobileScreens ? "1rem" : "20rem"}
                        marginBottom="2rem"
                        sx={{
                            background: 'linear-gradient(45deg, blue, blueviolet, violet)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontFamily="Crimson Text" fontWeight='500' textAlign="center" color="white">
                            Nihaal Nayak
                        </Typography>
                    </Box>

                    <Box
                        flexBasis={isNonMobileScreens ? "25%" : "50%"}
                        marginLeft={isNonMobileScreens ? "1rem" : "20rem"}
                        sx={{
                            background: 'linear-gradient(45deg, blue, blueviolet, violet)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontFamily="Crimson Text" fontWeight='500' textAlign="center" color="white">
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
                            background: 'linear-gradient(45deg, blue, blueviolet, violet)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontFamily="Crimson Text" fontWeight='500' textAlign="center" color="white">
                            Vignesh Shivhare
                        </Typography>
                    </Box>

                    <Box

                        flexBasis={isNonMobileScreens ? "25%" : "20%"}
                        marginTop="2rem"
                        sx={{
                            background: 'linear-gradient(45deg, blue, blueviolet, violet)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontFamily="Crimson Text" fontWeight='500' textAlign="center" color="white">
                            Manas Deshpande
                        </Typography>
                    </Box>

                    <Box

                        flexBasis={isNonMobileScreens ? "25%" : "20%"}
                        marginTop="2rem"
                        sx={{
                            background: 'linear-gradient(45deg, blue, blueviolet, violet)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontFamily="Crimson Text" fontWeight='500' textAlign="center" color="white">
                            Nihaal Nayak
                        </Typography>
                    </Box>

                    <Box

                        flexBasis={isNonMobileScreens ? "25%" : "20%"}
                        marginTop="2rem"
                        sx={{
                            background: 'linear-gradient(45deg, blue, blueviolet, violet)',
                            height: '200px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant='h2' fontFamily="Crimson Text" fontWeight='500' textAlign="center" color="white">
                            Vedant Kalwar
                        </Typography>
                    </Box>
                </Box>
            )}


        </Box>
    );
};

export default HomePage;
