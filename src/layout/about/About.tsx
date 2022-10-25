import React from "react";
import { Stack, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Stack
      id="about"
      sx={{ minHeight: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4">About</Typography>
      <Box>
        <Typography variant="body1">
          Hey, I'm Shanta and I am from Singapore . Currently pursueing a
          Diploma in Information Technology .
        </Typography>
      </Box>
    </Stack>
  );
};

export default About;
