import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import "../../index.css";

const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    background: "#253053",
  },
};

const SideMenu = props => {
  const { classes } = props;

  return <div className={classes.sideMenu}></div>;
};
export default withStyles(style)(SideMenu);
