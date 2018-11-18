import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import amber from '@material-ui/core/colors/amber';
import green from '@material-ui/core/colors/green';
import 'datejs';
import TimeAgo from 'javascript-time-ago';
import es from 'javascript-time-ago/locale/es';
import { connect } from 'react-redux';

import SimpleCard from '../components/SimpleCard';
import GenericPage from './GenericPage';
import WarehouseProxy from '../controllers/WarehouseProxy';
import { differenceInDays } from '../entities/WarehouseReport';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
    button: {

    },
    error: {
        color: theme.palette.error.dark,
    },
    warning: {
        color: amber[700],
    },
    success: {
        color: green[600],
    },
});

class CierrePage extends React.Component {

    getDaysAgo(date) {
        return differenceInDays(date, new Date.parse("yesterday"));
    }

    getPrettyDate(date) {
        return date.toString("dd-MMM-yyyy");
    }

    componentDidMount() {
        this.updateReport();
    }

    constructor(props) {
        super(props);
        this.warehouseProxy = new WarehouseProxy(props.zones.currentZone);
        this.state = {
            restaurants: [],
            lastUpdate: null,
            files: 0
        };
        Date.i18n.setLanguage("es-MX");
        TimeAgo.locale(es);
        this.timeAgo = new TimeAgo('es-MX');
        this.interval = setInterval(this.updateReport, 2.5 * 60 * 1000);
    }

    onNewData = (report) => {
        this.setState({
            lastUpdate: report.lastUpdate,
            restaurants: report.getBadRestaurants(),
            files: report.getMissingFiles(),
        });
    };

    updateReport = () => {
        this.setState({
            lastUpdate: null,
        });
        this.warehouseProxy.getReportAsync().then(this.onNewData).catch(() => { });
    };

    render = () => {
        const { classes } = this.props;
        const { lastUpdate, files } = this.state;
        let restaurants = this.state.restaurants;

        restaurants = restaurants.sort((a, b) => { return a.lastUpdate.compareTo(b.lastUpdate) });

        if (lastUpdate === null) {
            return (
                <GenericPage title={""} header={"Actualizando..."}>
                    <LinearProgress color="primary" />
                </GenericPage>
            );
        }

        const lastUpdateTimeAgo = this.timeAgo.format(lastUpdate);
        const restaurantNodes = [];
        for (let rest of restaurants) {
            const daysAgo = this.getDaysAgo(rest.lastUpdate);
            const coloredDate = <div><span className={daysAgo === 1 ? classes.warning : classes.error}>{daysAgo}</span> día{daysAgo === 1 ? "" : "s"} atrás</div>;
            const current = (
                <Grid key={rest.name} item xd={12} sm={6} md={4} lg={3}>
                    <SimpleCard className={classes.paper} name={rest.name} city="-" prettyDate={this.getPrettyDate(rest.lastUpdate)} timeAgo={coloredDate} />
                </Grid>
            );
            restaurantNodes.push(current);
        }

        return (
            <GenericPage title={"Locales faltantes: " + restaurantNodes.length + ". Archivos faltantes: " + files} header={"Última actualización: " + lastUpdateTimeAgo}>
                <Grid container spacing={24}>
                    {restaurantNodes}
                </Grid>
            </GenericPage>
        );
    };
}

const mapStateToProps = state => ({
    zones: state,
});

export default connect(mapStateToProps)(withStyles(styles)(CierrePage));
