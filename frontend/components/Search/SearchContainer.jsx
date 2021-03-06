import React from 'react';
import { connect } from 'react-redux';
import { fetchRoutes, createRoute, updateRoute,deleteRoute, fetchRoute } from '../../actions/route_actions';
import RouteIndex from '../Route/route_index';
import { logout } from "../../actions/session_actions"
import Search from './Search'

const msp = (state, ownProps) => {
    return {
        routeId: ownProps.match.params.routeId,
        route: state.entities.routes[ownProps.match.params.routeId],
        routes: Object.values(state.entities.routes),
        sessionId: state.session.id || null,
        athlete: state.entities.users ? state.entities.users[state.session.id] : null,
    }
};

const mdp = dispatch => {
    return {
        fetchRoutes: () => dispatch(fetchRoutes()),
        fetchRoute: routeId => dispatch(fetchRoute(routeId)),
        createRoute: route => dispatch(createRoute(route)),
        updateRoute: route => dispatch(updateRoute(route)),
        deleteRoute: routeId => dispatch(deleteRoute(routeId)),
        logout: () => dispatch(logout())
    };
};

export default connect(msp, mdp)(RouteIndex)