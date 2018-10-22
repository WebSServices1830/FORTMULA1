import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GenericPage from './GenericPage';

const styles = theme => ({
    root: {

    },
    card: {
        textAlign: 'center',
    },
    cardContent: {
    },
});

class PantallasPage extends React.Component {
    state = {

    };

    generateItem() {
        return (
            <Grid item>
                <Card className={this.props.classes.card}>
                    <CardContent className={this.props.classes.cardContent}>
                        <Typography component="p">
                            Brownie
                            <br />
                            Whit
                            <br />
                            Chocolate
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }

    generateRow() {
        return (
            <Grid container spacing={8}>
                {this.generateItem()}
                {this.generateItem()}
                {this.generateItem()}
                {this.generateItem()}
                {this.generateItem()}
                {this.generateItem()}
                {this.generateItem()}
            </Grid>
        );
    }
    render() {
        const { classes } = this.props;

        return (
            <GenericPage className={classes.root} >
                {this.generateRow()}
                {this.generateRow()}
                {this.generateRow()}
                {this.generateRow()}
                {this.generateRow()}
                {this.generateRow()}
                {this.generateRow()}
            </GenericPage>
        );
    }
}

export default withStyles(styles)(PantallasPage);