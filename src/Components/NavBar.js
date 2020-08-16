import React, { useState } from "react";

import { Link } from "react-router-dom";
import MenuSliderRight from "@material-ui/core/Drawer";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
} from "@material-ui/icons";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import avatar from "../avatar.jpg";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: "250px",
    background: "#192e5b",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#e8f1f2",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
];

const NavBar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlide = (slider, open) => () => {
    setState({
      ...state,
      [slider]: open,
    });
  };
  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      onClick={toggleSlide(slider, false)}
      component="div"
      className={classes.menuSliderContainer}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Rasim" />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key} to={item.listPath} component={Link}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#36454f" }}>
          <Toolbar>
            <IconButton onClick={toggleSlide("right", true)}>
              <ArrowBack style={{ color: "#faf3dd" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#e8f1f2" }}>
              Портфолио
            </Typography>
            <MenuSliderRight
              onClose={toggleSlide("right", false)}
              anchor="right"
              open={state.right}
            >
              {sideList("right")}
              <Footer />
            </MenuSliderRight>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
