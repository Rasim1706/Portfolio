import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "#e8f1f2",
      "&:hover": {
        fill: "#192e5b",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: "0" }}
        icon={<TelegramIcon />}
        href="https://t.me/Danger_0_us"
        target="_blank"
      />
      <BottomNavigationAction
        style={{ padding: "0" }}
        icon={<MailIcon />}
        className={classes.root}
        href="mailto:dangerous200217@mail.ru"
        target="_blank"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: "0" }}
        icon={<InstagramIcon />}
        href="https://www.instagram.com/rasim_2_0_0_2__/?hl=ru"
        target="_blank"
      />
    </BottomNavigation>
  );
};

export default Footer;
