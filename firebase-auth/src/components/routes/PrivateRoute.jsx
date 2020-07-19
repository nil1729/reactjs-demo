import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppContext from '../../context/appContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const appContext = useContext(AppContext);
    const { isAuthenticated, loading } = appContext;
    return (
        <Route {...rest} render={props => (
            !isAuthenticated && !loading ?
                <Redirect to='/auth' />
                : <Component {...props} />
        )} />
    )
}
export default PrivateRoute;