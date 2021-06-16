
import { connect } from "react-redux";
import { deleteRoute, fetchRoute } from "../../actions/route_actions";
import RouteShow from "./route_show";
import { logout } from "../../actions/session_actions";

const msp = (state, ownProps) => {
    return {
        sessionId: state.session.id || null,
        routeId: ownProps.match.params.route.id,
        route: state.entities.routes ? state.entities.routes[ownProps.match.params.routeId] : null,
        athlete: state.entities.users ? state.entities.users[state.session.id] : null,
    }
}

const mdp = dispatch => {
    return {
        fetchRoute: routeId => dispatch(fetchRoute(routeId)),
        deleteRoute: routeId => dispatch(deleteRoute(routeId)),
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(RouteShow)