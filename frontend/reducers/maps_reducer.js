// import {ADD_MARKER, REMOVE_MARKER} from '../actions/map_actions';

// const MapsReducer = (state, action) => {
//     switch (action.type) {
//         case "ADD_MARKER":
//             return {
//                 ...state,
//                 markers: [...state.markers, action.payload.marker]
//             };
//         case "REMOVE_MARKER":
//             return {
//                 ...state,
//                 markers: [...state.markers.filter(x =>
//                     x[0] !== action.payload.marker[0] &&
//                     x[1] !== action.payload.marker[1]
//                 )]
//             };
//         default:
//             return state;
//     }
// }

// export default MapsReducer;