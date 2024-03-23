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

const MainPage = ({ picturePath }) => {
    const dispatch = useDispatch();
    const [isFile, setIsFile] = useState(false);
    const [isText, setIsText] = useState(true);
    const [image, setImage] = useState(null);
    const [post, setPost] = useState("");
    const { palette } = useTheme();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width: 1200px)")
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;
    const maxCharCount = 250;
    const theme = useTheme();
    const dark = theme.palette.neutral.dark;

    const handlePostChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= maxCharCount) {
            setPost(inputValue);
        }
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
        formData.append("userId", _id);
        formData.append("description", post);

        if (image) {
            formData.append("picture", image);
            formData.append("picturePath", image.name);
        }

        const response = await fetch(`http://localhost:3001/posts`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: formData
        });

        const posts = await response.json();
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
                marginTop="6rem"
            >
                <WidgetWrapper2 width={isNonMobileScreens ? "50%" : "75%"}>
                    <Typography variant='h1'fontSize="60px"  fontWeight='600' textAlign="center" margin="3rem">
                        Welcome to our AI Authenticity Checker
                    </Typography>

                    <Typography variant='h1'fontSize="35px"  fontWeight='100' textAlign="center" margin="3rem" color={theme.palette.mode === 'dark' ? '#F2F2D5' : 'grey'}>
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
                                rows={8}
                                placeholder="Write your text here..."
                                onChange={handlePostChange}
                                inputProps={{ maxLength: maxCharCount }}
                                value={post}
                                variant='outlined'
                                sx={{
                                    width: "100%",
                                    fontSize: "50px",
                                    borderRadius: "5rem",
                                    padding: "1rem 1rem"
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end" sx={{ position: 'absolute', right: '20px', bottom: '20px' }}>
                                            <Typography variant="body2" >
                                                {post.length}/{maxCharCount}
                                            </Typography>
                                        </InputAdornment>
                                    )
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
            </Box>
        </Box>

    )

}

export default MainPage;
