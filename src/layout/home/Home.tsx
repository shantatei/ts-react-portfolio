import { useState } from "react";
import { Stack, Avatar, Typography, Grid } from "@mui/material";
import ProfilePic from "../../assets/miyamura.jpg";
import TypewriterComponent from "typewriter-effect";
import About from "../about/About";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    "React Developer",
    "Flutter Developer",
    "Node.js Developer",
    "Temasek Poly Student",
  ];

  return (
    <Grid container id="home" sx={{minHeight:"100vh"}}>
      <Grid item md={6} xs={12}>
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: "100vh",
            padding: "5rem",
          }}
        >
          <Avatar src={ProfilePic} sx={{ width: 250, height: 250 }}></Avatar>
          <Typography variant="h4">Hi I'm Shanta</Typography>
          <Typography variant="h4">
            <TypewriterComponent
              key={currentIndex}
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(100)
                  .typeString(items[currentIndex])
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(() => {
                    let nextIndex = currentIndex + 1;
                    if (nextIndex === items.length) nextIndex = 0;
                    setCurrentIndex(nextIndex);
                  })
                  .start();
              }}
            />
          </Typography>
        </Stack>
      </Grid>
      <Grid item md={6} xs={12}>
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: "100vh",
          padding: '2rem'
        }}
      >
        <About />
      </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
