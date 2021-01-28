import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
// import MapsReducer from './maps_reducer';

const rootReducer = combineReducers({ 
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    // maps: MapsReducer
})

export default rootReducer;