import React from 'react';
import Typography from '@mui/material/Typography';
import { Typewriter } from 'typewriter-effect';

const TypewriterText = ({ text }) => {
    return (
        <Typography variant='h1' color='dark' fontWeight='500'>
            <Typewriter
                options={{
                    strings: text,
                    autoStart: true,
                    loop: true,
                }}
            />
        </Typography>
    );
};

export default TypewriterText;
