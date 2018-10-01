/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { ExitToApp, PersonAdd } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button component={Link}
          to="/login-page"
          color="transparent"
          className={classes.navLink}
        >
          <ExitToApp className={classes.icons} /> Iniciar sesión
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button component={Link}
          to="/login-page"
          color="transparent"
          className={classes.navLink}
        >
          <PersonAdd className={classes.icons} /> Registrarse
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
