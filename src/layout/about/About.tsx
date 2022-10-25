import React from "react";
import { Card, Typography } from "@mui/material";
import { useColorMode } from "../../context/ColorModeContext";

const About = () => {
  const { mode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <Card
      sx={{
        boxShadow: !isDark ? "0 5px 10px grey" : null,
        transition: "all ease-in 300ms",
        height:"100%",
        padding:"1rem"
      }}
    >
      {/* <Typography variant="h4">About</Typography> */}
      <Typography variant="body1" sx={{fontSize: '1.5rem'}}>
        Hey, I'm Shanta, from Singapore and I am currently pursuing a Diploma in
        Information Technology. I first started learning to code when I entered
        Temasek Polytechnic in 2021 and have been enjoying it ever since
      </Typography>
      <br />
      <Typography variant="body1" sx={{fontSize: '1.5rem'}}>
        Check out the projects section to see some of my highlighted open-source
        projects I've made.
      </Typography>
    </Card>
  );
};

export default About;
