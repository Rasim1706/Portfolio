import React from "react";
import { Box, Typography, Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import avatar from "../avatar.jpg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#e8f1f2",
  },
  subTitle: {
    color: "#faf3dd",
  },
  typedContainer: {
    position: "absolute",
    backgroundColor: "#36454f",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60vh",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Rasim" />
      </Grid>

      <Typography variant="h4" className={classes.title}>
        <Typed strings={["Ахмедшин Расим"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography variant="h5" className={classes.subTitle}>
        <Typed
          strings={["Web Design", "React Developer", "Front-end"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
