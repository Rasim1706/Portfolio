import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./NavBar";

import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import project1 from "../images/images/githublogo.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100vh",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <NavBar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Мой GitHub
                </Typography>
                <Typography color="textSecondary" variant="body2" component="p">
                  Имеется несколько проектов.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://github.com/Rasim1706?tab=repositories"
                rel="noopener noreferrer"
                target="_blank"
                size="small"
                color="primary"
              >
                Смотреть
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
