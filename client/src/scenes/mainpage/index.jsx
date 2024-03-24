import {
    EditOutlined,
    DeleteOutlined,
    ImageOutlined,
    AttachFileOutlined,
    TextFields
} from '@mui/icons-material';
import {
    Box,
    Divider,
    Typography,
    InputAdornment,
    useTheme,
    useMediaQuery,
    IconButton,
    TextField,
    Button

} from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import Dropzone from 'react-dropzone';
import WidgetWrapper2 from '../../components/WidgetWrapper2';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Navbar from '../navbar';
import { useNavigate } from "react-router-dom";

const MainPage = ({ picturePath }) => {
    const dispatch = useDispatch();
    const [extractedData, setExtractedData] = useState('');
    const [error, setError] = useState('');
    const [isFile, setIsFile] = useState(false);
    const [isText, setIsText] = useState(true);
    const [image, setImage] = useState(null);
    const [post, setPost] = useState("");
    const { palette } = useTheme();
    const navigate = useNavigate();
    const [submitted, isSubmitted] = useState(false);
    const isNonMobileScreens = useMediaQuery("(min-width: 1200px)")
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;
    const theme = useTheme();
    const dark = theme.palette.neutral.dark;

    const handlePostChange = (e) => {
        const inputValue = e.target.value;
        setPost(inputValue);
    };

    const switchhtext = () => {
        setIsFile(false);
        setIsText(true);
    };


    const switchhfile = () => {
        setIsFile(true);
        setIsText(false);
    };

    const handleFileDrop = (acceptedFiles) => {
        const acceptedExtensions = ['.pdf', '.docx', '.doc'];
        const fileExtension = acceptedFiles[0]?.name?.split('.').pop().toLowerCase();
        if (acceptedExtensions.includes(`.${fileExtension}`)) {
            setImage(acceptedFiles[0]);
        } else {
            alert('Please upload a valid file format (.pdf, .docx, .doc)');
        }
    };

    const handlePost = async () => {
        const formData = new FormData();

        if (image) {
            formData.append('file', image);
        }
        if (post) {
            formData.append('text', post);
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/submit-data', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            console.log(data); // Check the data structure in the console

            if (response.ok) {
                if (data[0]) {
                    setExtractedData(data[0]);
                }
                setError('');
            } else {
                setExtractedData('');
                setError(data.error || 'Failed to extract text');
            }
            isSubmitted(true);
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        }
        setImage(null);
        setPost("");
    };

    return (
        <Box>
            <Navbar isHomePage={false} />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                marginTop="10rem"
            >
                <WidgetWrapper2 width={isNonMobileScreens ? "50%" : "75%"} border="1px solid black">
                    <Typography variant='h1' fontSize="60px" fontWeight='600' textAlign="center" margin="3rem">
                        Welcome to our AI Authenticity Checker
                    </Typography>

                    <Typography variant='h1' fontSize="35px" fontWeight='100' textAlign="center" margin="3rem" color={theme.palette.mode === 'dark' ? '#F2F2D5' : 'grey'}>
                        "Ensuring trust in digital content"
                    </Typography>

                    <Typography variant='h2' color="orange" fontWeight='100' textAlign="center" marginTop="6rem">
                        Select content to proceed
                    </Typography>


                    {isText && (
                        <FlexBetween gap="1.5rem">
                            <TextField
                                multiline
                                size='string'
                                rows={10}
                                placeholder="Write your text here..."
                                onChange={handlePostChange}
                                value={post}
                                variant='outlined'
                                sx={{
                                    width: "100%",
                                    fontSize: "50px",
                                    borderRadius: "5rem",
                                    padding: "1rem 1rem"
                                }}
                            />
                        </FlexBetween>
                    )}

                    {isFile && (
                        <Box
                            border={`1px solid ${medium}`}
                            borderRadius="5px"
                            mt="1rem"
                            p="1rem"
                        >
                            <Dropzone
                                acceptedFiles=".pdf,.doc,.docx"
                                multiple={false}
                                onDrop={handleFileDrop}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <FlexBetween>
                                        <Box
                                            {...getRootProps()}
                                            border={`2px dashed ${palette.primary.main}`}
                                            p="1rem"
                                            width="100%"
                                            sx={{ "&:hover": { cursor: "pointer" } }}
                                        >
                                            <input {...getInputProps()} />
                                            {!image ? (
                                                <p>Drop a file here or click to upload (.pdf, .docx, .doc)</p>
                                            ) : (
                                                <FlexBetween>
                                                    <Typography>{image.name}</Typography>
                                                    <EditOutlined />
                                                </FlexBetween>
                                            )}
                                        </Box>
                                        {image && (
                                            <IconButton
                                                onClick={() => setImage(null)}
                                                sx={{ width: "15%" }}
                                            >
                                                <DeleteOutlined />
                                            </IconButton>
                                        )}
                                    </FlexBetween>
                                )}
                            </Dropzone>
                        </Box>
                    )}

                    <Divider sx={{ margin: "1.25rem 0" }} />

                    <FlexBetween
                        width="100%"
                        padding="3rem 20%"
                        display={isNonMobileScreens ? "flex" : "block"}
                        gap="1.5rem"
                        justifyContent="space-around"
                    >
                        <FlexBetween gap="0.25rem" onClick={switchhfile}>
                            <AttachFileOutlined sx={{ color: mediumMain, fontSize: '3rem' }} />
                            <Typography
                                color={mediumMain} fontSize="20px"
                                sx={{ "&:hover": { cursor: "pointer", color: medium } }}
                            >
                                Upload a File
                            </Typography>
                        </FlexBetween>

                        <FlexBetween gap="0.25rem" onClick={switchhtext}>
                            <TextFields sx={{ color: mediumMain, fontSize: '3rem' }} />
                            <Typography
                                color={mediumMain} fontSize="20px"
                                sx={{ "&:hover": { cursor: "pointer", color: medium } }}
                            >
                                Write Text
                            </Typography>
                        </FlexBetween>
                    </FlexBetween>

                    <FlexBetween
                        width="100%"
                        padding="3rem 20%"
                        display={isNonMobileScreens ? "flex" : "block"}
                        gap="1.5rem"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button
                            onClick={handlePost}
                            disabled={!post && !image}
                            sx={{
                                color: palette.background.alt,
                                backgroundColor: "blueviolet",
                                width: "25%",
                                height: "50px",
                                margin: "auto",
                                borderRadius: "3rem",
                                alignItems: "center"
                            }}
                        >
                            SUBMIT
                        </Button>
                    </FlexBetween>
                </WidgetWrapper2>

                {submitted && (
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height="40vh"
                        width="80vh"
                        paddingLeft="4rem"
                        paddingBottom="5rem"
                    >

                        <WidgetWrapper2 width={isNonMobileScreens ? "70%" : "75%"} border="0.1px solid black" >
                            <Box paddingLeft="4rem"
                                paddingBottom="4rem" paddingRight="4rem">
                                {extractedData && (
                                    <Box>
                                        <Typography variant="h2" color={theme.palette.mode === 'dark' ? 'lightgreen' : 'darkgreen'} textAlign="center" marginTop="1rem">
                                            Extracted Data
                                        </Typography>

                                        <Typography variant="h3" color="blue" textAlign="center" marginTop="2rem" sx={{ textDecoration: 'underline' }}>
                                            Evaluation Metrics
                                        </Typography>

                                        <Box>
                                            {/* {Object.keys(extractedData).map((key) => (
                                                <Typography key={key} variant="h4" marginTop="3rem" textAlign="center">
                                                    {key === "0" && (
                                                        <>
                                                            <span style={{ color: 'orange' }}>Burstiness:   </span>&nbsp;&nbsp;
                                                            <span>{extractedData[key]["Burstiness"]}</span>
                                                            <br /><br />
                                                            <span style={{ color: 'orange' }}>Perplexity:   </span>&nbsp;&nbsp;
                                                            <span>{extractedData[key]["Perplexity"]}</span>
                                                            <br /><br />
                                                            <span style={{ color: 'orange' }}>Perplexity per line:   </span>&nbsp;&nbsp;
                                                            <span>{parseFloat(extractedData[key]["Perplexity per line"]).toFixed(2)}</span>
                                                            <br /><br />


                                                        </>
                                                    )}
                                                    {key === "1" && (
                                                        <>
                                                            <Typography variant="h3" color="blue" textAlign="center" marginTop="2rem" sx={{ textDecoration: 'underline' }}>
                                                                Conclusion made:
                                                            </Typography>
                                                            <Typography marginTop="2rem" variant='h3' color={theme.palette.mode === 'dark' ? '#D2DDEC' : '#586A83'}>
                                                                {`${extractedData[key]}`}
                                                            </Typography>

                                                        </>
                                                    )}
                                                </Typography>
                                            ))} */}
                                            <Typography variant="h4" marginTop="3rem" textAlign="center">
                                                <span style={{ color: 'orange' }}>Status  :   </span>&nbsp;&nbsp;
                                                <span>{extractedData["label"] == "Fake" ? "AI Generated" : "Human Generated"}</span>
                                            </Typography>
                                            <Typography variant="h4" marginTop="3rem" textAlign="center">
                                                <span style={{ color: 'orange' }}>Percentage  : </span>&nbsp;&nbsp;
                                                <span>{(extractedData["score"] * 100).toFixed(3)}%</span>
                                            </Typography>

                                        </Box>

                                    </Box>
                                )}
                                {error && (
                                    <Box>
                                        <Typography variant="h3" color="red" textAlign="center" marginTop="3rem">
                                            Error
                                        </Typography>
                                        <Typography variant="body1" textAlign="center" color="red">
                                            {error}
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                        </WidgetWrapper2>
                    </Box>
                )}

            </Box>


        </Box>

    )

}

export default MainPage;
