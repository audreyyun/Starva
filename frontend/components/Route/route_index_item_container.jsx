
import { connect } from "react-redux"; 
import { deleteRoute, fetchRoute } from "../../actions/route_actions"
import RouteIndexItem from "./route_index_item";


const mdp = dispatch => { 
    return { 
        fetchRoute: routeId => dispatch(fetchRoute(routeId)),
        deleteRoute: routeId => dispatch(deleteRoute(routeId))
    }
}

export default connect(null, mdp)(RouteIndexItem)