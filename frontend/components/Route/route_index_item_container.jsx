
import { connect } from "react-redux"; 
import { deleteRoute } from "../../actions/route_actions"
import RouteIndexItem from "./route_index_item";


const mdp = dispatch => { 
    return { 
        deleteRoute: routeId => dispatch(deleteRoute(routeId))
    }
}

export default connect(null, mdp)(RouteIndexItem)