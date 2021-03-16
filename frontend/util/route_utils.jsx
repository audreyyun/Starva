import React from 'react';
import { connect } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const msp = state => ({ 
    loggedIn: Boolean(state.session.id)
});


const Auth = ({ loggedIn, path, component: Component, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? (<Redirect to="/"/>) : (<Component {...props} />)
        )}
    />
);

const Protect = ({ loggedIn, path, component: Component, exact}) => (
    <Route 
      path={path}
      exact={exact}
      render={props => (
          loggedIn ? (<Component {...props} />) : (<Redirect to="/login" />
      ))}
    />
)

export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectedRoute = withRouter(connect(msp, null)(Protect))