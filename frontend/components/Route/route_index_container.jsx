import React from 'react';
import { connect } from 'react-redux';
import { fetchRoutes, fetchRoute, createRoute, updateRoute, deleteRoute } from '../../actions/route_actions';
import RouteIndex from './route_index';
import { logout } from "../../actions/session_actions"
import { deleteRoute } from '../../util/route_api_util';

const msp = (state, ownProps) => {
    debugger
    return {
        sessionId: state.session.id || null,
        routeId: ownProps.match.params.routeId,
        routes: Object.values(state.entities.routes), 
        route: state.entities.routes ? state.entities.routes[ownProps.match.params.routeId] : null,
        athlete: state.entities.users ? state.entities.users[state.session.id] : null,
    }
};

const mdp = dispatch => {
    return {
        fetchRoutes: () => dispatch(fetchRoutes()),
        // fetchRoute: routeId => dispatch(fetchRoute(routeId)),
        createRoute: route => dispatch(createRoute(route)),
        updateRoute: route => dispatch(updateRoute(route)),
        deleteRoute: routeId => dispatch(deleteRoute(routeId)),
        logout: () => dispatch(logout())
    };
};

export default connect(msp, mdp)(RouteIndex)