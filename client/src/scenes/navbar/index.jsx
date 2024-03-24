import { useState } from "react";
import {
    Box,
    IconButton,
    Typography,
    useTheme,
    useMediaQuery,
    Button
} from "@mui/material";
import {
    DarkMode,
    LightMode,
    Menu,
    Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state/index";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import myAnim2 from '../../animations/robot2.json';

const Navbar = ({ isHomePage = true }) => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { palette } = useTheme();
    const user = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery("(min-width: 1200px)");

    const handleButtonClick = () => {
        navigate('/home');
    };

    const theme = useTheme();
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    // const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    return (
        <FlexBetween padding="1rem 6%" backgroundColor={alt}>
            <FlexBetween gap="1.75rem">
                <img src="../../assets/logo.jpg" alt="Logo" style={{ width: 60, height: 60, marginRight: 8, borderRadius: "50%" }} />
                <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="blueviolet"
                    onClick={() => navigate("/")}
                    sx={{
                        "&:hover": {
                            cursor: "pointer",
                        },
                    }}
                >
                    <span style={{ color: theme.palette.mode === 'dark' ? 'whitesmoke' : '#6896CD', fontWeight: 800 }}>checkm</span>
                    <span style={{ color: theme.palette.mode === 'dark' ? 'gray' : 'blue', fontWeight: 800 }}>AI</span><span style={{ color: theme.palette.mode === 'dark' ? 'whitesmoke' : '#6896CD', fontWeight: 800 }}>te</span>
                </Typography>
            </FlexBetween>

            {/* DESKTOP NAV */}
            {isNonMobileScreens ? (
                <FlexBetween gap="2rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? (
                            <DarkMode sx={{ fontSize: "32px" }} />
                        ) : (
                            <LightMode sx={{ color: dark, fontSize: "32px" }} />
                        )}
                    </IconButton>

                    {isHomePage && (
                        <Button
                            variant="outlined"
                            onClick={handleButtonClick}
                            sx={{
                                borderColor: theme.palette.mode === 'dark' ? 'whitesmoke' : '#6896CD', // Border color for the outlined button
                                color: theme.palette.mode === 'dark' ? 'whitesmoke' : '#6896CD',
                                fontWeight: 800,
                                fontSize: "16px",
                                padding: "1rem",
                                borderRadius: "1rem",
                                '&:hover': {
                                    backgroundColor: theme.palette.mode === 'dark' ? 'whitesmoke' : '#6896CD', // Background color on hover
                                    borderColor: "#2460C8", // Border color on hover
                                    color: theme.palette.background.default, // Text color on hover
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    )}
                </FlexBetween>
            ) : (
                <IconButton
                    onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                >
                    <Menu />
                </IconButton>
            )}

            {/* MOBILE NAV */}
            {!isNonMobileScreens && isMobileMenuToggled && (
                <Box
                    position="fixed"
                    right="0"
                    bottom="0"
                    height="100%"
                    zIndex="10"
                    maxWidth="500px"
                    minWidth="300px"
                    backgroundColor={background}
                >
                    {/* CLOSE ICON */}
                    <Box display="flex" justifyContent="flex-end" p="1rem">
                        <IconButton
                            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                        >
                            <Close />
                        </IconButton>
                    </Box>

                    {/* MENU ITEMS */}
                    <FlexBetween
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        gap="3rem"
                    >
                        <IconButton
                            onClick={() => dispatch(setMode())}
                            sx={{ fontSize: "25px" }}
                        >
                            {theme.palette.mode === "dark" ? (
                                <DarkMode sx={{ fontSize: "25px" }} />
                            ) : (
                                <LightMode sx={{ color: dark, fontSize: "25px" }} />
                            )}
                        </IconButton>

                        <Button
                            variant="outlined"
                            onClick={handleButtonClick}
                            sx={{
                                borderColor: "#2460C8", // Border color for the outlined button
                                color: "#2460C8",
                                fontWeight: 800,
                                fontSize: "16px",
                                padding: "1rem",
                                borderRadius: "1rem",
                                '&:hover': {
                                    backgroundColor: "#2460C8", // Background color on hover
                                    borderColor: "#2460C8", // Border color on hover
                                    color: theme.palette.background.default, // Text color on hover
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    </FlexBetween>
                </Box>
            )}
        </FlexBetween>
    );
};

export default Navbar;