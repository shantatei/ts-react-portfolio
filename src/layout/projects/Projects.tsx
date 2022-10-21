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
import FitLahLogo from "../../assets/fitlahlogo-light.png";

const Projects = () => {
  return (
    <Stack justifyContent="center" alignItems="center" mt={2}>
      <Typography variant="h4">Projects</Typography>
      <Grid container spacing="7" sx={{ maxWidth: "80%" }} mt={2}>
        <Grid item lg={4} md={6} xs={12}>
          <Card>
            <CardHeader
              title="MuseTime"
              subheader="Year 1.1 Music App Project"
            />
            <CardActions>
              <Button variant="contained" color="success">
                Java
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Card>
            <CardHeader
              title="FoodView"
              subheader="Year 1.2 Restaurant Review Website Project"
            />
            <CardActions>
              <Button variant="contained" color="success">
                HTML
              </Button>
              <Button variant="contained" color="success">
                CSS
              </Button>
              <Button variant="contained" color="success">
                Javascript
              </Button>
              <Button variant="contained" color="success">
                MySql
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Card>
            <CardHeader
              title="FitLah"
              subheader="Year 2.1 Fitness Tracking App Project"
            />
            <CardActions>
              <Button variant="contained" color="success">
                Flutter
              </Button>
              <Button variant="contained" color="success">
                Firebase
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Card>
            <CardHeader
              title="TradeSellBuy"
              subheader="Year 2.1 E-Commerce Website Project"
            />
            <CardActions>
              <Button variant="contained" color="success">
                React
              </Button>
              <Button variant="contained" color="success">
                Laravel
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Projects;
