import {connect} from "react-redux"
import { updateRoute } from "../../actions/route_actions"
import { fetchRoute } from "../../util/route_api_util";
import { fetchRoute, updateRoute } from "../../actions/route_actions";
import RouteMap from "./route_map"

const msp = (state, ownProps) => ({
    athleteId: state.session.id, 
    routeId: ownProps.match.params.routeId
});

const mdp = dispatch => ({
    fetchRoute: routeId => dispatch(fetchRoute(routeId)),
    action: route => dispatch(updateRoute(route))
});

const RouteMapEditContainer = connect(msp, mdp)(RouteMap);
export default RouteMapEditContainer;