import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

const styles = theme => ({
    item: {
        display: 'block',
        paddingTop: 0,
        paddingBottom: 0,
    },
    itemLeaf: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0,
    },
    button: {
        justifyContent: 'flex-start',
        textTransform: 'none',
        width: '100%',
    },
    buttonLeaf: {
        justifyContent: 'flex-start',
        textTransform: 'none',
        width: '100%',
        fontWeight: theme.typography.fontWeightRegular,
        '&.depth-0': {
            fontWeight: theme.typography.fontWeightMedium,
        },
    },
    active: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
    },
});

class AppDrawerNavItem extends React.Component {
    state = {
        open: this.props.openImmediately,
    };

    componentDidMount() {
        // So we only run this logic once.
        if (!this.props.openImmediately) {
            return;
        }

        // Center the selected item in the list container.
        const activeElement = document.querySelector(`.${this.props.classes.active}`);
        if (activeElement && activeElement.scrollIntoView) {
            activeElement.scrollIntoView({});
        }
    }

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };


    render() {
        const {
            children,
            classes,
            depth,
            href,
            onClick,
            openImmediately,
            title,
            active,
            ...other
        } = this.props;

        const style = {
            paddingLeft: 8 * (3 + 2 * depth),
        };

        if (href) {
            return (
                <ListItem className={classes.itemLeaf} disableGutters {...other}>
                    <Button
                        className={classNames(classes.buttonLeaf, `depth-${depth}`, active === true ? classes.active : null)}
                        disableRipple
                        onClick={onClick}
                        style={style}
                    >
                        {title}
                    </Button>
                </ListItem>
            );
        }

        return (
            <ListItem className={classes.item} disableGutters {...other}>
                <Button
                    classes={{
                        root: classes.button,
                        label: openImmediately ? 'algolia-lvl0' : '',
                    }}
                    onClick={this.handleClick}
                    style={style}
                >
                    {title}
                </Button>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    {children}
                </Collapse>
            </ListItem>
        );
    }
}

export default withStyles(styles)(AppDrawerNavItem);