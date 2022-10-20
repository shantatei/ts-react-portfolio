import React from "react";
import {
  Typography,
  Stack,
  Card,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";
import FitLahLogo from "../../assets/fitlahlogo-light.png";

const Projects = () => {
  return (
    <Stack justifyContent="center" alignItems="center" mt={2}>
      <Typography variant="h4">Projects</Typography>
      <Grid container spacing="7" sx={{ maxWidth: "80%" }}>
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="MuseTime"
              subheader="Year 1.1 Music App Project"
            />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="FoodView"
              subheader="Year 1.2 Restaurant Review Website Project"
            />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="FitLah"
              subheader="Year 2.1 Fitness Tracking App Project"
            />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="TradeSellBuy"
              subheader="Year 2.1 E-Commerce Website Project"
            />
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Projects;
