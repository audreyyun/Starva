// import React, { createContext, useContext, useReducer } from "react";
// const MapStateContext = createContext();
// const MapDispatchContext = createContext();


// export const MapProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(MapReducer, { markers: [] });
//     return (
//         <MapStateContext.Provider value={state}>
//             <MapDispatchContext.Provider value={dispatch}>
//                 {children}
//             </MapDispatchContext.Provider>
//         </MapStateContext.Provider>
//     );
// };


// export const useStateMap = () => {
//     const context = useContext(MapStateContext);
//     if (context === undefined) {
//         throw new Error("place useStateMap within MapProvider");
//     }
//     return context;
// };
// export const useDispatchMap = () => {
//     const context = useContext(MapDispatchContext);
//     if (context === undefined) {
//         throw new Error("place useDispatchMap within MapProvider");
//     }
//     return context;
// };
