import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { logOut } from '../actions';


class LogoutPage extends React.Component {
    state = { ready: false, };
    componentDidMount() {
        const { dispatch } = this.props;
        this.setState({
            ready: true,
        });
        dispatch(logOut());
    }
    render() {
        const { ready } = this.state;
        const redirectNode = <Redirect to="/" />;
        return (
            <React.Fragment>
                {ready ? redirectNode : null}
            </React.Fragment>
        );
    }
};

export default connect()(LogoutPage);