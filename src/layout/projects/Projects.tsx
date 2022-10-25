import React from "react";
import { Typography, Stack, Grid } from "@mui/material";
import ProjectCard from "./components/ProjectCard";

export interface Project {
  name: string;
  description: string;
  githubLink: string;
  tags: string[];
}

const projects: Project[] = [
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
    tags: ["HTML", "CSS", "JS", "MySql"],
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
    tags: ["React", "Laravel", "Redux"],
  },
];

const Projects = () => {
  return (
    <Stack
      id="projects"
      alignItems="center"
      sx={{ 
        minHeight: "100vh",
        padding: '91.2px 0',
        margin: '-91.2px 0' 
      }}
    >
      <Typography variant="h4">Projects</Typography>
      <Grid container spacing="10" sx={{ maxWidth: "80%" }} mt={2}>
        {projects.map((project) => {
          return (
            <Grid item key={project.name}  md={6} xs={12}>
              <ProjectCard project={project} />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Projects;
