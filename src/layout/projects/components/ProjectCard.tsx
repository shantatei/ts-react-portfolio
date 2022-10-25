import React from "react";
import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";
import { useColorMode } from "../../../context/ColorModeContext";

const ProjectCard = ({ project }: any) => {
  const { mode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <Card
      sx={{
        ":hover": { boxShadow: !isDark ? "0 5px 10px grey" : null },
        transition: "all ease-in 300ms",
      }}
    >
      <CardActionArea href={project.githubLink}>
        <CardHeader title={project.name} subheader={project.description} />
        <CardActions>
          {project.tags.map((tag: string) => {
            return (
              <Button variant="contained" color="success">
                {tag}
              </Button>
            );
          })}
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
