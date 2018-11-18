import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { Route } from 'react-router-dom';
import GenericPage from './GenericPage';
import EditRestaurantPage from './EditRestaurantPage';
import RestaurantsTable from '../components/RestaurantsTable';
import GenericProxy from '../controllers/GenericProxy';
import { API_RESTAURANT_URL } from '../constants/Config';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    container: {
        position: 'relative',
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
    button: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    }
});

class ProductosPage extends React.Component {
    constructor(props) {
        super(props);
        this.proxy = new GenericProxy(API_RESTAURANT_URL);
        this.database = null;
        this.state = {
            isLoading: false,
            rows: [],
            search: '',
            currentItemId: props.match.params.itemId,
        };
    }

    componentDidMount() {
        this.doFetch();
    }

    doFetch = () => {
        this.setState({
            isLoading: true,
        });
        this.proxy.fetchAsync("colombia").then(this.onNewData);
    }

    onNewData = data => {
        this.database = data;
        this.setState({
            isLoading: false,
            rows: data
        });
    };

    handleSearch = evt => {
        this.setState({
            search: evt.target.value.toLowerCase(),
        })
    };

    handleGoToEditProduct = (id) => {
        this.props.history.push(`/${this.props.country}/restaurantes/${id}`);
        this.setState({
            currentItemId: id,
        });
    };

    handleGoBack = () => {
        this.props.history.push(`/${this.props.country}/restaurantes`);
        this.setState({
            currentItemId: null,
        });
    };

    handleSaveEdit = (state) => {
        console.log(state);
        //this.handleGoBack();
    };

    getFilteredRows = (rows, search) => {
        if (search.length > 0) {
            search = search.toLowerCase();
            return rows.filter(row => {
                for (const field in row) {
                    if (row[field] != null && row[field].toString().toLowerCase().indexOf(search) !== -1) {
                        return true;
                    }
                }
                return false;
            });
        }
        return rows;
    };

    render() {
        const { country, match } = this.props;
        const { isLoading, rows, search } = this.state;

        let currentItemId = match.params.itemId;

        if (isLoading) {
            return (
                <GenericPage title={""} header={"Actualizando..."}>
                    <LinearProgress color="primary" />
                </GenericPage>
            );
        }

        const currentProduct = (currentItemId != null ? this.proxy.find('name', currentItemId) : null);

        if (currentProduct !== null) {
            return (
                <div>
                    <EditRestaurantPage handleGoBack={this.handleGoBack} handleSaveEdit={this.handleSaveEdit} country={country} product={currentProduct} />
                </div>
            );
        }

        let filteredRows = this.getFilteredRows(rows, search);

        return (
            <GenericPage title="Restaurantes">
                <TextField
                    fullWidth
                    placeholder='Buscar'
                    onChange={this.handleSearch}
                    type="search"
                    value={search}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <RestaurantsTable rows={filteredRows} search={search} country={country} handleEditProduct={this.handleGoToEditProduct} />
                <Button variant="fab" color="primary" aria-label="Add" className={this.props.classes.button}>
                    <AddIcon />
                </Button>
            </GenericPage>
        );
    }
}

const ProductosPageContainer = props => {
    return (
        <Route
            path={`${props.match.url}/:itemId?`}
            render={(routeProps) => <ProductosPage {...props} {...routeProps} />}
        />
    );
};

export default withStyles(styles)(ProductosPageContainer);