import { combineReducers } from "redux";

const initialState = {
    connected: false,
    readyState: null,
    socket: null,
    response: {},
};

//Connect to WS
function connectionReducer(state = initialState, action = {}) {
    switch (action.type) {
        case "SOCKET_CONNECTION_INIT":
            return Object.assign({}, state, {
                connected: false,
                socket: action.socket,
            });

        case "SOCKET_CONNECTION_SUCCESS":
            return Object.assign({}, state, {
                connected: true,
            });

        case "SOCKET_CONNECTION_ERROR":
            return Object.assign({}, state, {
                connected: false,
            });

        case "SOCKET_CONNECTION_CLOSED":
            return Object.assign({}, state, {
                connected: false,
                socket: null,
            });

        case "SOCKET_MESSAGE":
            //handle your data here
            return state;
        default:
            return state;
    }
}

// COMBINED REDUCERS
const reducers = {
    connectionReducer: connectionReducer,
};

export default combineReducers(reducers);
