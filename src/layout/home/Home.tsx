import { useState } from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import ProfilePic from "../../assets/miyamura.jpg";
import TypewriterComponent from "typewriter-effect";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    "React Developer",
    "Flutter Developer",
    "Node.js Developer",
    "Temasek Poly Student",
  ];

  return (
    <Stack
      id="home"
      display="flex"
      justifyContent="center"
      width="100%"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Avatar
        src={ProfilePic}
        sx={{ width: 250, height: 250}}
      ></Avatar>
      <Typography variant="h4">Hi I'm Shanta</Typography>
      <Typography variant="h4" textAlign="center">
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
  );
};

export default Home;
