import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import GenericPage from './GenericPage';
import GenericCard from '../components/GenericCard';
import SoapClient from '../controllers/SoapClient';
import { API_WSDL_URL, API_WSDL_NAMESPACE } from '../constants/Config';
import { LinearProgress } from '@material-ui/core';


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
});

class PremiosPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            premios: [],
            premiosOk: false,
        };
    }

    getRandomImage() {
        const images = [
            "https://www.mundodeportivo.com/r/GODO/MD/p5/ContraPortada/Imagenes/2018/10/18/Recortada/1046989568_20181007124255205-koJB-U4524183882647RD-980x554@MundoDeportivo-Web.jpg",
            "https://www.malagahoy.es/2018/10/21/formula1/Hamilton-Raikkonen-mano-GP-EEUU_1293181418_90374831_667x375.jpg",
            "https://okdiario.com/img/2018/10/21/063_1052639846-655x368.jpg",
            "https://www.ecestaticos.com/imagestatic/clipping/2f0/89a/2f089a645e15c2c79237e3a74fa17813/imagen-sin-titulo.jpg?mtime=1540159525",
        ];
        return images[Math.floor(images.length * Math.random())];
    }

    componentDidMount = () => {
        this.getPremios();
    };

    getPremios = () => {
        this.soapClient = new SoapClient(API_WSDL_URL, API_WSDL_NAMESPACE);
        this.soapClient.invoke("verPremios").then(data => {
            this.setState({
                premios: data,
                premiosOk: true,
            });
        });
    };

    getDrawablePremios = () => {
        const { classes } = this.props;
        const { premios } = this.state;
        if (this.state.premiosOk) {

            const displayPremios = [];

            for (const premio of premios) {
                console.log("Pushing... " + JSON.stringify(premio));
                const id = premio["id"]["_text"];
                const ciudad = premio["ciudad"]["_text"];
                const description = "";
                displayPremios.push(<div key={id} className={classes.paper}><GenericCard id={id} title={ciudad} description={description} link={"/premios/" + id} imageUrl={this.getRandomImage()} /></div>);
            }

            return (
                <Grid container spacing={24}>
                    {displayPremios}
                </Grid>
            );
        } else {
            return <div><LinearProgress color="primary" /></div>;
        }
    };

    render() {
        return (
            <GenericPage title={"Premios"} headerTitle={"Premios"}>
                {this.getDrawablePremios()}
            </GenericPage>
        );
    }
}

export default withStyles(styles)(PremiosPage);