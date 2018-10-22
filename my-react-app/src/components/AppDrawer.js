import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AppDrawerNavItem from './AppDrawerNavItem';

const styles = theme => ({
    paper: {
        width: 250,
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing.unit / 2,
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    toolbarIe11: {
        display: 'flex',
    },
    toolbar: {
        ...theme.mixins.toolbar,
        paddingLeft: theme.spacing.unit * 3,
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    anchor: {
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing.unit * 3,
        minWidth: 120,
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    link: {
        textDecoration: "none",
    },
});

class AppDrawer extends React.Component {
    generateLink(url, name) {
        const { classes, match } = this.props;
        const currentPageId = match.params.root;
        return <NavLink key={url} className={classes.link} to={"/" + url}><AppDrawerNavItem depth={1} href={"-"} key={name} title={name} active={currentPageId === url} /></NavLink>;
    }

    renderLoginItems() {
        const { context } = this.props;
        let links = [];
        if (context.loggedIn) {
            links.push(this.generateLink("profile", "Ver perfil"));
            links.push(this.generateLink("logout", "Cerrar sesión"));
        } else {
            links.push(this.generateLink("login", "Iniciar sesión"));
            links.push(this.generateLink("register", "Registrarse"));
        }
        return (
            <List>
                <AppDrawerNavItem depth={0} key={"Perfil"} openImmediately={true} title={"Perfil"}>
                    <List>
                        {links}
                    </List>
                </AppDrawerNavItem>
            </List>

        );
    }

    renderNavItems() {
        return (
            <List>
                <AppDrawerNavItem depth={0} key={"Gran Premio"} openImmediately={true} title={"Gran Premio"}>
                    <List>
                        {this.generateLink("premios", "Premios")}
                        {this.generateLink("escuderias", "Escuderías")}
                        {this.generateLink("pilotos", "Pilotos")}
                    </List>
                </AppDrawerNavItem>

                <AppDrawerNavItem depth={0} key={"Panel de Control"} openImmediately={false} title={"Panel de Control"}>
                    <List>
                        {this.generateLink("premios", "Premios")}
                        {this.generateLink("escuderias", "Escuderías")}
                        {this.generateLink("pilotos", "Pilotos")}
                    </List>
                </AppDrawerNavItem>
            </List>
        );
    }

    render() {
        const { classes, className, disablePermanent, mobileOpen, onClose, onOpen } = this.props;

        const drawer = (
            <div className={classes.nav}>
                <div className={classes.toolbarIe11}>
                    <div className={classes.toolbar}>
                        <Typography variant="title" color="inherit">
                            Fortmula 1
                        </Typography>
                    </div>
                </div>
                <Divider />
                {this.renderLoginItems()}
                <Divider />
                {this.renderNavItems()}
            </div>
        );

        return (
            <div className={className}>
                <Hidden lgUp={!disablePermanent} implementation="js">
                    <SwipeableDrawer
                        classes={{
                            paper: classNames(classes.paper, 'algolia-drawer'),
                        }}
                        variant="temporary"
                        open={mobileOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </SwipeableDrawer>
                </Hidden>
                {disablePermanent ? null : (
                    <Hidden mdDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.paper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    context: state,
});

export default connect(mapStateToProps)(withRouter(withStyles(styles)(AppDrawer)));