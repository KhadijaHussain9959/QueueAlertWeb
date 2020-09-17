import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Home from "../Components/Home/Home.js";
import Client from "../Components/Clients/Clients.js";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
const SideMenus = [
  {
    name: "Home",
    link: "/home",
    icon: <HomeIcon fontSize="large" />,
  },
  {
    name: "Client",
    link: "/client",
    icon: <PeopleIcon fontSize="large" />,
  },
];

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = (link) => {
    this.props.history.push(link);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
                root: classes.sideDrawerRoot,
              }}
              variant="permanent"
              open
            >
              <List>
                {SideMenus.map((menu, index) => (
                  <ListItem
                    button
                    key={menu.name}
                    onClick={() => this.handleClick(menu.link)}
                  >
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    <ListItemText>{menu.name}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* yahan pe aap routing k through different component render kraenge jo k main abhi apko sekhaonga */}
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/client" component={Client} />
            <Redirect to="/home" />
          </Switch>
        </main>
      </div>
    );
  }
}

const drawerWidth = 240;

const style = (theme) => ({
  sideDrawerRoot: {},
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#ea8585",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

export default withRouter(withStyles(style)(Sidebar));
