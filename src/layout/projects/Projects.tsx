import React from "react";
import {
  Typography,
  Stack,
  Card,
  CardHeader,
  CardActions,
  Grid,
  Button,
} from "@mui/material";
import ProjectCard from "./components/ProjectCard";

const projects= [
  {
    name: "MuseTime",
    description: "Year 1.1 Music App Project",
    githubLink: "https://github.com/shantatei/MuseTime",
    tags: ["Java"],
  },
  {
    name: "FoodView",
    description: "Year 1.2 Restaurant Review Website Project",
    githubLink: "https://github.com/shantatei/foodview",
    tags: ["HTML", "CSS", "Javascript", "MySql"],
  },
  {
    name: "Fitlah",
    description: "Year 2.1 Fitness Tracking App Project",
    githubLink: "https://github.com/shantatei/fitlah",
    tags: ["Flutter", "Firebase"],
  },
  {
    name: "TradeSellBuy",
    description: "Year 2.1 E-Commerce Website Project",
    githubLink: "https://github.com/shantatei/tsb-frontend",
    tags: ["React", "Laravel"],
  },
];

const Projects = () => {
  return (
    <Stack justifyContent="center" alignItems="center" mt={2}>
      <Typography variant="h4">Projects</Typography>
      <Grid container spacing="10" sx={{ maxWidth: "80%" }} mt={2}>
        {projects.map((project) => {
          return (
            <Grid item key={project.name} lg={4} md={6} xs={12}>
              <ProjectCard
                project={project}
              />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Projects;
