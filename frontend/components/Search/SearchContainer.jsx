import React from 'react';
import { connect } from 'react-redux';
import { fetchRoutes, createRoute, updateRoute } from '../../actions/route_actions';
import RouteIndex from '../Route/route_index';
import { logout } from "../../actions/session_actions"
import Search from './Search'

const msp = (state, ownProps) => {
    return {
        routes: Object.values(state.entities.routes)
    }
};

const mdp = dispatch => {
    return {
        fetchRoutes: () => dispatch(fetchRoutes()),
        // createRoute: route => dispatch(createRoute(route)),
        // updateRoute: route => dispatch(updateRoute(route)),
        // logout: () => dispatch(logout())
    };
};

export default connect(msp, mdp)(RouteIndex)