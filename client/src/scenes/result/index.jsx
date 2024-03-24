import React from 'react';
import { Box, Typography } from '@mui/material';

const DisplayData = (props) => {
    const { extractedData, error } = props.state || {};

    return (
        <Box>
            <Box>
                <Typography variant="h3" textAlign="center" marginTop="3rem">
                    Extracted Data
                </Typography>
                {/* Render the individual keys and values of extractedData */}
                <Box>
                    {Object.keys(extractedData || {}).map((key) => (
                        <Typography key={key} variant="body1" textAlign="center">
                            {key === "0" && (
                                <>
                                    Burstiness: {extractedData[key]["Burstiness"]} <br />
                                    Perplexity: {extractedData[key]["Perplexity"]}
                                </>
                            )}
                            {key === "1" && (
                                `${key}: ${extractedData[key]}`
                            )}
                        </Typography>
                    ))}
                </Box>

            </Box>

            {error && (
                <Box>
                    <Typography variant="h3" textAlign="center" marginTop="3rem">
                        Error
                    </Typography>
                    <Typography variant="body1" textAlign="center" color="red">
                        {error}
                    </Typography>
                </Box>
            )}
        </Box>
    );
}

export default DisplayData;
