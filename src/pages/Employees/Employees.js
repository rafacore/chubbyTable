import React from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import { makeStyles, Paper } from "@material-ui/core";

import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Employees() {
  const classes = useStyles();
  return (
    <>
      <PageHeader
        title="page header  "
        subTitle="page sedcription"
        icon={<PeopleOutlineIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
}
