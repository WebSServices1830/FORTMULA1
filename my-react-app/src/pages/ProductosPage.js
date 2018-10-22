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
import EditProductPage from './EditProductPage';
import ProductsTable from '../components/ProductsTable';
import NewposProxy from '../controllers/NewposProxy';

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
        this.newposProxy = new NewposProxy();
        this.productDb = null;
        this.state = {
            isLoading: true,
            rows: [],
            search: '',
            currentProductId: props.match.params.productId,
        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = () => {
        this.setState({
            isLoading: true,
        });
        this.newposProxy.fetchProductsAsync("sa2").then(this.onNewData);
    }

    onNewData = data => {
        this.productDb = data;
        this.setState({
            isLoading: false,
            rows: data.getProducts()
        });
    };

    handleSearch = evt => {
        this.setState({
            search: evt.target.value.toLowerCase(),
        })
    };

    handleEditProduct = (id) => {
        this.props.history.push(`/${this.props.country}/productos/${id}`);
        this.setState({
            currentProductId: id,
        });
    };

    handleGoBack = () => {
        this.props.history.push(`/${this.props.country}/productos`);
        this.setState({
            currentProductId: null,
        });
    };

    getFilteredRows = (rows, search) => {
        if (search.length > 0) {
            search = search.toLowerCase();
            return rows.filter(row => {
                let keep = row.nameLong.toLowerCase().indexOf(search) !== -1;
                if (!keep) {
                    keep = row.nameShort.toLowerCase().indexOf(search) !== -1;
                }
                if (!keep) {
                    keep = row.code.toString().indexOf(search) !== -1;
                }
                return keep;
            });
        }
        return rows;
    };

    render() {
        const { country, match } = this.props;
        const { isLoading, rows, search } = this.state;

        let currentProductId = match.params.productId;

        if (isLoading) {
            return (
                <GenericPage title={""} header={"Actualizando..."}>
                    <LinearProgress color="primary" />
                </GenericPage>
            );
        }

        const currentProduct = (currentProductId != null ? this.productDb.getProduct(currentProductId) : null);

        if (currentProduct !== null) {
            return (
                <div>
                    <EditProductPage handleGoBack={this.handleGoBack} country={country} product={currentProduct} />
                </div>
            );
        }

        let filteredRows = this.getFilteredRows(rows, search);

        return (
            <GenericPage title="Productos" header="10.114.98.1">
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
                <ProductsTable rows={filteredRows} search={search} country={country} handleEditProduct={this.handleEditProduct} />
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
            path={`${props.match.url}/:productId?`}
            render={(routeProps) => <ProductosPage {...props} {...routeProps} />}
        />
    );
};

export default withStyles(styles)(ProductosPageContainer);