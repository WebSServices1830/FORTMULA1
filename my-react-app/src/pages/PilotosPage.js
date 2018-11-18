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

class PilotosPage extends React.Component {
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
        this.soapClient.invoke("verPilotos").then(data => {
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
                const id = item["id"]["_text"];
                const nombre = item["nombre"]["_text"];
                const description = item["nacionalidad"]["_text"];
                const imageUrl = item["foto"] != null ? item["foto"]["_text"] : "https://www.curvasenlazadas.com/wp-content/uploads/2011/08/The-Stig-1.jpg";
                displayData.push(<div key={id} className={classes.paper}><GenericCard id={id} title={nombre} description={description} imageUrl={imageUrl} link={"/pilotos/" + id} /></div>);
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
            <GenericPage headerTitle={"Pilotos"} title={"Pilotos"}>
                {this.getDrawableGeneric()}
            </GenericPage>
        );
    }
}

export default withStyles(styles)(PilotosPage);