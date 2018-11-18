import React from 'react';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import AppFrame from '../components/AppFrame';

const styles = theme => ({
    root: {
        textAlign: "left",
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    markdownElement: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        padding: `0 ${theme.spacing.unit}px`,
    },
    title: {
        ...theme.typography.display2,
        color: theme.palette.text.secondary,
        margin: '32px 0 16px',
        textAlign: "inherit",
    },
    headline: {
        ...theme.typography.headline,
        margin: '0 0 40px',
    },
    defaultText: {

    }
});

class GenericPage extends React.Component {

    renderPageTitle(caption) {
        return (
            <Typography
                variant="display2"
                align="center"
                component="h1"
                color="inherit"
                gutterBottom
                className={this.props.classes.title}
            >
                {caption}
            </Typography>
        );
    }

    renderPageDescription(caption) {
        return (
            <Typography
                variant="headline"
                component="h2"
                color="inherit"
                gutterBottom
                className={this.props.classes.headline}
            >
                {caption}
            </Typography>
        );
    }

    render() {
        return (
            <AppFrame title={this.props.headerTitle}>
                <div className={classNames(this.props.className, this.props.classes.root)}>
                    <div className={this.props.classes.header}>
                        {this.props.header}
                    </div>
                    {this.renderPageTitle(this.props.title)}
                    {this.renderPageDescription(this.props.description)}
                    {this.props.children}
                </div>
            </AppFrame>
        );
    }
}

export default withStyles(styles)(GenericPage);
