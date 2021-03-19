
import { connect } from "react-redux"; 
import { deleteRoute, fetchRoute } from "../../actions/route_actions"
import RouteIndexItem from "./route_index_item";
import { logout } from "../../actions/session_actions"

const msp = (state, ownProps) => { 
    debugger
    return {
        routeId: ownProps.match.params.routeId,
        route: state.entities.routes[ownProps.match.params.routeId],
        sessionId: state.session.id,
        athlete: state.entities.users ? state.entities.users[state.session.id] : null
    }
}

const mdp = dispatch => { 
    return { 
        fetchRoute: routeId => dispatch(fetchRoute(routeId)),
        deleteRoute: routeId => dispatch(deleteRoute(routeId)),
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(RouteIndexItem)