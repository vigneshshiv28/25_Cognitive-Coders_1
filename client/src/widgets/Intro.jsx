import React from 'react';
import Typography from '@mui/material/Typography';
import WidgetWrapper from '../components/WidgetWrapper';
import {
    Star,
    Start
} from '@mui/icons-material';
import Typewriter from 'typewriter-effect';

const IntroWidget = () => {
    return (
        <WidgetWrapper>
            <Typography variant='h1' fontWeight='500' textAlign="center" margin="2rem">
                Check the Authenticity of AI Generated
            </Typography>

            <Typography variant='h2' color="green" textAlign="center" margin="2rem">
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Text')
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('Files')
                            .start();
                    }}
                />
            </Typography>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Start style={{ fontSize: 48 }} />
            </div>
        </WidgetWrapper>
    );
};

export default IntroWidget;
