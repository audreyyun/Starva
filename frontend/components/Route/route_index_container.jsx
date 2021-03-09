import React from 'react';
import { connect } from 'react-redux';
import { fetchRoutes, fetchRoute, createRoute, updateRoute, deleteRoute } from '../../actions/route_actions';
import RouteIndex from './route_index';
import { logout } from "../../actions/session_actions"
import { deleteRoute } from '../../util/route_api_util';

const msp = (state, ownProps) => {
    return {
        routes: Object.values(state.entities.routes)
    }
};

const mdp = dispatch => {
    return {
        fetchRoutes: () => dispatch(fetchRoutes()),
        fetchRoute: routeId => dispatch(fetchRoute(routeId)),
        createRoute: route => dispatch(createRoute(route)),
        updateRoute: route => dispatch(updateRoute(route)),
        deleteRoute: route => dispatch(deleteRoute(route)),
        logout: () => dispatch(logout())
    };
};

export default connect(msp, mdp)(RouteIndex)