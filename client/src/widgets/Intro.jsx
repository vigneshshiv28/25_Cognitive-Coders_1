import React from 'react';
import Typography from '@mui/material/Typography';
import WidgetWrapper from '../components/WidgetWrapper';
import { Button } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const IntroWidget = () => {
    const theme = useTheme();
    const dark = theme.palette.neutral.dark;
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery("(min-width: 1200px)");

    const handleButtonClick = () => {
        navigate('/home');
    };

    return (
        <WidgetWrapper >
            <Typography variant={isNonMobileScreens ? 'h1' : 'h2'} fontFamily="Kanit" fontWeight='700' fontSize={isNonMobileScreens ? "80px" : "65px"} textAlign={isNonMobileScreens ? "left" : "center"}   color={theme.palette.mode === 'dark' ? '#FFFFFF' : '#3E3938'}>
                CHECK THE
            </Typography>

            <Typography variant={isNonMobileScreens ? 'h1' : 'h2'} fontFamily="Kanit" fontWeight='700' fontSize={isNonMobileScreens ? "80px" : "65px"} textAlign={isNonMobileScreens ? "left" : "center"} marginRight={isNonMobileScreens? "2rem": undefined} color={theme.palette.mode === 'dark' ? '#FFFFFF' : '#3E3938'}>
                AUTHENTICITY OF
            </Typography>

            <Typography variant={isNonMobileScreens ? 'h1' : 'h2'} fontFamily="Kanit" fontWeight='700' fontSize={isNonMobileScreens ? "80px" : "65px"} textAlign={isNonMobileScreens ? "left" : "center"}color="#D62B28">
                AI GENERATED
            </Typography>

            <Typography variant='h2' fontWeight='700' color={theme.palette.mode === 'dark' ? 'lime' : 'blue'} fontSize="60px" fontFamily="Kanit" textAlign={isNonMobileScreens ? "left" : "center"} marginTop="2rem"
                marginRight="9rem">
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('TEXT')
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('FILES')
                            .start();
                    }}
                />
            </Typography>

            <div style={{ display: 'flex', justifyContent: isNonMobileScreens ? 'left' : 'center', alignItems: 'left', margin: "6rem", marginRight: "10rem" }}>
                <Button
                    variant="outlined"
                    onClick={handleButtonClick}
                    sx={{
                        borderColor: theme.palette.mode === 'dark' ? 'whitesmoke' : '#6896CD', // Border color for the outlined button
                        color: theme.palette.mode === 'dark' ? 'whitesmoke' : '#6896CD',
                        fontWeight: 800,
                        fontSize: "16px",
                        padding: "1.5rem",
                        borderRadius: "1rem",
                        '&:hover': {
                            backgroundColor: theme.palette.mode === 'dark' ? 'whitesmoke' : '#6896CD',
                            borderColor: "#2460C8", // Border color on hover
                            color: theme.palette.background.default, // Text color on hover
                        },
                    }}
                >
                    START
                </Button>
            </div>
        </WidgetWrapper>
    );
};

export default IntroWidget;
