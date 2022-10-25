import React from "react";
import { Stack, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Stack
      id="contact"
      sx={{
        minHeight: "100vh",
        padding: '91.2px 0',
        margin: '-91.2px 0' 
      }}
      alignItems="center"
    >
      <Typography variant="h4">Contact</Typography>
    </Stack>
  );
};

export default Contact;
