import React from "react";
import Typography from "@mui/material/Typography";
import WidgetWrapper from "../components/WidgetWrapper";
import { Star, Start } from "@mui/icons-material";
import Typewriter from "typewriter-effect";

const IntroWidget = () => {
  return (
    <WidgetWrapper>
      <Typography
        variant="h1"
        fontWeight="700"
        fontSize="70px"
        // textAlign="center"
        margin="1rem"
      >
        Check Authenticity of AI Generated
        <span
          style={{
            color:
              "linear-gradient(90deg, rgba(67,206,162,1) 0%, rgba(24,90,157,1) 100%)",
          }}
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Text")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Files")
                .start();
            }}
          />
        </span>
      </Typography>

      {/* <Typography
        variant="h2"
        color="green"
        fontFamily=""
        textAlign="center"
        margin="2rem"
      >
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Text")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Files")
              .start();
          }}
        />
      </Typography> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Start style={{ fontSize: 48 }} />
      </div>
    </WidgetWrapper>
  );
};

export default IntroWidget;
