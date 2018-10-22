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

class EscuderiasPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataOk: false,
        };
    }

    componentDidMount = () => {
        this.getPremios();
    };

    getPremios = () => {
        this.soapClient = new SoapClient(API_WSDL_URL, API_WSDL_NAMESPACE);
        this.soapClient.invoke("verEscuderias").then(data => {
            this.setState({
                data: data,
                dataOk: true,
            });
        });
    };

    getDrawableGeneric = () => {
        const { data } = this.state;
        const { classes } = this.props;
        if (this.state.dataOk) {

            const displayData = [];

            for (const item of data) {
                console.log("Pushing... " + JSON.stringify(item));
                const id = item["id"]["_text"];
                const nombre = item["nombre"]["_text"];
                const description = item["descripcion"]["_text"];
                const imageUrl = item["foto"] != null ? item["foto"]["_text"] : "https://squir.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/g/e/generic_formula_1_lowpoly_wire_0000.jpg";
                displayData.push(<div key={id} className={classes.paper}><GenericCard id={id} title={nombre} description={description} imageUrl={imageUrl} link={"/escuderias/" + id} /></div>);
            }

            return (
                <Grid container spacing={24}>
                    {displayData}
                </Grid>
            );
        } else {
            return <div><LinearProgress color="primary" /></div>;
        }
    };

    render() {
        return (
            <GenericPage headerTitle={"Escuderías"} title={"Escuderías"}>
                {this.getDrawableGeneric()}
            </GenericPage>
        );
    }
}

export default withStyles(styles)(EscuderiasPage);