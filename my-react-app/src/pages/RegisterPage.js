import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';

import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import { API_WSDL_URL, API_WSDL_NAMESPACE } from '../constants/Config';
import SoapClient from '../controllers/SoapClient';
import { logIn } from '../actions';
import GenericPage from './GenericPage';


const styles = theme => ({
    container: {
    },
    textField: {
        marginRight: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
    close: {
        padding: theme.spacing.unit / 2,
    },
});

const types = ['aficionado', 'administrador'];

class RegisterPage extends React.Component {
    state = {
        username: '',
        password: '',
        type: types[0],
        loading: false,
        showMessage: false,
        message: '',
        redirect: false,
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleLogIn = () => {
        const { username, password, type } = this.state;
        this.soapClient = new SoapClient(API_WSDL_URL, API_WSDL_NAMESPACE);
        this.setState({
            loading: true,
        });
        this.soapClient.invoke("registrarUsuario", { username, password, tipo: type }).then(data => {
            this.handleLoginResponse(data);
        });
    };

    handleLoginResponse = response => {
        if (response["_text"] != null) {
            const { dispatch } = this.props;
            this.setState({
                redirect: true,
            });
            dispatch(logIn(response["_text"]));
        } else {
            this.enableMessage("Datos inválidos");
        }

        this.setState({
            loading: false,
        });
    };

    handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showMessage: false });
    };

    enableMessage(message) {
        this.setState({
            showMessage: true,
            message,
        });
    }

    renderSnackBar() {
        const { classes } = this.props;
        const { showMessage, message } = this.state;
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={showMessage}
                autoHideDuration={6000}
                onClose={this.handleCloseSnackBar}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{message}</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={classes.close}
                        onClick={this.handleCloseSnackBar}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        );
    }

    render() {
        const { classes } = this.props;
        const { username, password, loading, redirect, type } = this.state;

        return (
            <GenericPage title={"Registrarse"} headerTitle={"Registrarse"}>
                <form className={classes.container} noValidate autoComplete="off">
                    <div>
                        <TextField
                            id="username"
                            label="Nombre de usuario"
                            classusername={classes.textField}
                            value={username}
                            onChange={this.handleChange('username')}
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="password"
                            label="Contraseña"
                            classpassword={classes.textField}
                            value={password}
                            onChange={this.handleChange('password')}
                            margin="normal"
                            type="password"
                        />
                    </div>
                    <br/>
                    <div>
                        <Select
                            name="type"
                            value={type}
                            onChange={this.handleChange('type')}
                        >
                            <MenuItem value={"aficionado"}>Aficionado</MenuItem> 
                            <MenuItem value={"administrador"}>Administrador</MenuItem> 
                        </Select>
                    </div>
                    <br />
                    <Button variant="contained" color="primary" className={classes.button} disabled={loading} onClick={() => { this.handleLogIn(); }}>
                        Registrarse
                    </Button>
                    {loading ? <CircularProgress className={classes.progress} /> : null}
                </form>
                {this.renderSnackBar()}
                {redirect ? <Redirect to="/" /> : null}
            </GenericPage>
        );
    }
}

export default connect()(withStyles(styles)(RegisterPage));
