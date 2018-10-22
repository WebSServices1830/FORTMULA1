import React from 'react';
import GenericPage from './GenericPage';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    root: {
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginRight: theme.spacing.unit * 2,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        float: 'right',
    },
    headline: {
        ...theme.typography.headline,
        margin: '20px 0',
    },
});

class EditProductPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.product;
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleChangeCheckbox = name => event => {
        this.setState({
            [name]: event.target.checked,
        });
    };

    render() {
        const { name, ip } = this.state;
        const { classes, handleGoBack, handleSaveEdit } = this.props;
        return (
            <GenericPage title={<div><Tooltip title="Atrás" enterDelay={300}><IconButton onClick={() => { handleGoBack(); }} className={classes.root}><ArrowBackIcon /></IconButton></Tooltip>{name}</div>}>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="name"
                        label="Código"
                        className={classes.textField}
                        value={name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="name"
                        label="Nombre"
                        className={classes.textField}
                        value={"Calle 125"}
                        onChange={() => { }}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="ip"
                        label="Dirección IP"
                        className={classes.textField}
                        value={ip}
                        onChange={this.handleChange('ip')}
                        margin="normal"
                        variant="outlined"
                    />
                </form>

                <br />
                <Button variant="contained" color="primary" className={classes.button} onClick={() => { handleSaveEdit(this.state); }}>
                    Guardar
                </Button>
                <Button onClick={() => { handleGoBack(); }} variant="contained" color="secondary" className={classes.button}>
                    Cancelar
                </Button>
            </GenericPage>
        );
    }
}

export default withStyles(styles)(EditProductPage)