import React from "react";
import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";

const ProjectCard = ({ project }: any) => {
  return (
    <Card
      sx={{
        ":hover": { boxShadow: "0 5px 10px grey" },
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
