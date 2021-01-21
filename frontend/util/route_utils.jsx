import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const msp = state => ({ 
    loggedIn: Boolean(state.session.id)
});


const Auth = ({ loggedIn, path, component: Component, exact}) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/"/> : <Component {...props} />
        )}
    />
);

const Protect = ({ loggedIn, path, component: Component, exact}) => (
    <Route 
      path={path}
      render={props => (
          loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
      )}
    />
)

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protect))