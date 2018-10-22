import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import GenericPage from './GenericPage';
import SoapClient from '../controllers/SoapClient';
import { API_WSDL_URL, API_WSDL_NAMESPACE } from '../constants/Config';
import { LinearProgress } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    
});

class PilotoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            dataOk: false,
        };
    }

    componentDidMount = () => {
        this.getData();
    };

    getData = () => {
        const { match } = this.props;
        console.log(match.params.id);
        this.soapClient = new SoapClient(API_WSDL_URL, API_WSDL_NAMESPACE);
        this.soapClient.invoke("verPiloto", { id: match.params.id }).then(data => {
            this.setState({
                data: data,
                dataOk: true,
                title: "",
            });
        });
    }; 

    render() {
        const { dataOk, data } = this.state;
        let title = "";
        let content = <div><LinearProgress color="primary" /></div>;

        if (dataOk) {
            console.log(data);
            title = data["nombre"]["_text"];
            content = [];

            for (const key in data) {
                content.push(<div key={key}>{key}: {data[key]["_text"]}</div>);
            }
        }

        return (
            <GenericPage title={title} headerTitle={"Pilotos"}>
                {content}
            </GenericPage>
        );
    }
}

export default withRouter(withStyles(styles)(PilotoPage));