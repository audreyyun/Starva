import * as RouteAPIUtil from "../util/routes_api_util";

export const RECEIVE_ALL_ROUTES = "RECEIVE_ALL_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const REMOVE_ROUTE = "REMOVE_ROUTE";

export const receiveAllRoutes = (routes) => ({
    type: RECEIVE_ALL_ROUTES,
    routes
});

export const receiveRoute = (route) => ({
    type: RECEIVE_ROUTE,
    route
});

export const removeRoute = (routeId) => ({
    type: REMOVE_ROUTE,
    routeId
});



export const fetchRoutes = () => dispatch => (
    RouteAPIUtil.fetchRoutes()
        .then(routes => dispatch(receiveAllRoutes(routes)))
);

export const fetchRoute = (id) => dispatch => (
    RouteAPIUtil.fetchRoute(id)
        .then(route => dispatch(receiveRoute(route)))
);

export const createRoute = (newRoute) => dispatch => (
    RouteAPIUtil.createRoute(newRoute)
        .then(route => dispatch(receiveRoute(route)))
);

export const updateRoute = (editeRoute) => dispatch => (
    RouteAPIUtil.updateRoute(editeRoute)
        .then(route => dispatch(receiveRoute(route)))
);

export const deleteRoute = (id) => dispatch => (
    RouteAPIUtil.deleteRoute(id)
        .then(() => dispatch(removeRoute(id)))
);