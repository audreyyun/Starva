
import { connect } from "react-redux";
import { deleteRoute, fetchRoute } from "../../actions/route_actions";
import RouteShow from "./route_show";
import { logout } from "../../actions/session_actions";

const msp = (state, ownProps) => {
    return {
        // routeId: ownProps.match.params.route.id,
        route: state.entities.routes ? state.entities.routes[ownProps.match.params.routeId] : null,
        sessionId: state.session.id
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