import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FormatTextdirectionLToR from '@material-ui/icons/FormatTextdirectionLToR';
import FormatTextdirectionRToL from '@material-ui/icons/FormatTextdirectionRToL';
import Tooltip from '@material-ui/core/Tooltip';
import Hidden from '@material-ui/core/Hidden';
import NProgress from 'nprogress';

import AppDrawer from './AppDrawer';
import NProgressBar from './NProgressBar';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    grow: {
        flex: '1 1 auto',
    },
    title: {
        marginLeft: 24,
        flex: '0 1 auto',
    },
    appBar: {
        transition: theme.transitions.create('width'),
        '@media print': {
            position: 'absolute',
        },
    },
    appBarHome: {
        boxShadow: 'none',
    },
    appBarShift: {
        [theme.breakpoints.up('lg')]: {
            width: 'calc(100% - 240px)',
        },
    },
    drawer: {
        [theme.breakpoints.up('lg')]: {
            width: 240,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    appContent: {
        marginBottom: 100,
        fontFamily: theme.typography.fontFamily,
        paddingTop: 80,
        flex: '1 1 100%',
        maxWidth: '100%',
        margin: '0 auto',
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing.unit * 4,
            paddingRight: theme.spacing.unit * 4,
            maxWidth: 'calc(100% - 162px)',
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing.unit * 5,
            paddingRight: theme.spacing.unit * 9,
            maxWidth: 'calc(100% - 240px - 162px)',
        },
    },
});

class AppFrame extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    onRouteChanged() {
        NProgress.start();
        NProgress.done();
    }

    state = {
        mobileOpen: false,
        redirect: false,
        alwaysShiftAppBar: false,
    };

    handleDrawerOpen = () => {
        this.setState({ mobileOpen: true });
    };

    handleDrawerClose = () => {
        this.setState({ mobileOpen: false });
    };

    handleSwitchDrawer = () => {
        this.setState({ alwaysShiftAppBar: !this.state.alwaysShiftAppBar });
    };

    render() {
        const { classes, children, title } = this.props;
        const { mobileOpen, alwaysShiftAppBar } = this.state;

        let disablePermanent = false;
        let navIconClassName = '';
        let appBarClassName = classes.appBar;
        let drawerClassName = classes.drawer;

        if (alwaysShiftAppBar) {
            // home route, don't shift app bar or dock drawer
            disablePermanent = true;
            appBarClassName += ` ${classes.appBarHome}`;
            drawerClassName = '';
        } else {
            navIconClassName = classes.navIconHide;
            appBarClassName += ` ${classes.appBarShift}`;
        }

        return (
            <div className={classes.root}>
                <NProgressBar />
                <CssBaseline />
                <AppBar className={appBarClassName}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={navIconClassName}
                        >
                            <MenuIcon />
                        </IconButton>
                        {title !== null && (
                            <Typography className={classes.title} variant="title" color="inherit" noWrap>
                                {title}
                            </Typography>
                        )}
                        <div className={classes.grow} />
                        <Hidden mdDown>
                            <Tooltip title="Activar menú" enterDelay={300}>
                                <IconButton
                                    color="inherit"
                                    onClick={this.handleSwitchDrawer}
                                    aria-label="Activar menú"
                                >
                                    {this.state.alwaysShiftAppBar === true ? (
                                        <FormatTextdirectionLToR />
                                    ) : (
                                            <FormatTextdirectionRToL />
                                        )}
                                </IconButton>
                            </Tooltip>
                        </Hidden>
                    </Toolbar>
                </AppBar>
                <AppDrawer
                    className={drawerClassName}
                    disablePermanent={disablePermanent}
                    onClose={this.handleDrawerClose}
                    onOpen={this.handleDrawerOpen}
                    mobileOpen={mobileOpen}
                />
                <div className={classes.appContent}>
                    {children}
                </div>
            </div>
        );
    }
}

export default (withStyles(styles)(AppFrame));
