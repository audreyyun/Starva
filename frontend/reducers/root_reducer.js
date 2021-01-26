import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import RoutesReducer from './routes_reducer';

const rootReducer = combineReducers({ 
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    routes: RoutesReducer,
})

export default rootReducer;