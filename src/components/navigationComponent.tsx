import React from "react";
import logo from "../assets/images/icon.png";
import "../index.css";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountBoxIcon from "@material-ui/icons/AccountBoxRounded";
import NodeIcon from "@material-ui/icons/StorageSharp";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appbar: {
      background: "linear-gradient(45deg, #43a047 30%, #388e3c 90%)",
      color: "#fff",
    },
    menuButton2: {
      border: 0,
      color: "white",
      height: 24,
      margin: "0 5px",
    },
  }),
);

interface IProps {
  title: any;
}

export function NavigationBar(props: IProps) {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <AppBar position="static" className={classes.appbar} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" arial-label="menu">
            <img src={logo} height="35" alt="" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <Link to="/main"><Button className={classes.menuButton2}><AccountBoxIcon /></Button></Link>
          <Link to="/nodes"><Button className={classes.menuButton2}><NodeIcon /></Button></Link>
          <Link to="/login"><Button className={classes.menuButton2}>Logout</Button></Link>
        </Toolbar>
      </AppBar>
    </nav>
  );
}