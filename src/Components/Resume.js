import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #e8f1f2",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #e8f1f2",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#faf3dd #faf3dd transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#e8f1f2",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #faf3dd #faf3dd",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "#36454f",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem  0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heiding: {
    color: "#faf3dd",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    textTransform: "uppercase",
    padding: "0",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heiding}>
          Working
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web Design
            </Typography>
            <Typography variant="body1" style={{ color: "#e8f1f2" }}>
              Имеются навыки веб-дизайна
            </Typography>
            <Typography variant="subtitle" style={{ color: "#faf3dd" }}>
              На чем работал: Photoshop, Figma
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Html & Css
            </Typography>
            <Typography variant="body1" style={{ color: "#e8f1f2" }}>
              Опыт верстки
            </Typography>
            <Typography variant="subtitle" style={{ color: "#faf3dd" }}>
              Навыки: SCSS, Bootstrap 3-4, BEM
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019-2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              JavaScript
            </Typography>
            <Typography variant="body1" style={{ color: "#e8f1f2" }}>
              Опыта работы нет, делал мини проекты для себя
            </Typography>
            <Typography variant="subtitle" style={{ color: "#faf3dd" }}>
              ES6
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              React.js | Redux
            </Typography>
            <Typography variant="body1" style={{ color: "#e8f1f2" }}>
              Опыта работы нет, делал мини проекты для себя
            </Typography>
            <Typography variant="subtitle" style={{ color: "#faf3dd" }}>
              React-router, material-ui react, Понимание Redux
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
