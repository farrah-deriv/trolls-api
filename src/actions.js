import * as types from "./types";

const DEFAULT_APP_ID = 11780;
const DEFAULT_API_URL = "frontend.binaryws.com";
const DEFAULT_LANGUAGE = "EN";
const DEFAULT_BRAND = "deriv";

export function initializeSocket() {
    return dispatch => {
        const socket = new WebSocket(
            "wss://" +
                getServerUrl() +
                "/websockets/v3?l=" +
                DEFAULT_LANGUAGE +
                "&app_id=" +
                DEFAULT_APP_ID +
                "&brand=" +
                DEFAULT_BRAND
        );
        dispatch(socketConnectionInit(socket));

        socket.onopen = function () {
            dispatch(socketConnectionSuccess());
        };

        socket.onerror = function () {
            dispatch(socketConnectionError());
        };

        socket.onmessage = function (event) {
            dispatch(socketMessage(event.data));
        };

        socket.onclose = function () {
            dispatch(socketConnectionClosed());
        };
    };
}

function getServerUrl() {
    return window.localStorage.getItem("config.server_url") || DEFAULT_API_URL;
}

function socketConnectionInit(socket) {
    return {
        type: types.SOCKET_CONNECTION_INIT,
        socket,
    };
}

function socketConnectionSuccess() {
    return {
        type: types.SOCKET_CONNECTION_SUCESS,
    };
}

function socketConnectionError() {
    return {
        type: types.SOCKET_CONNECTION_ERROR,
    };
}

function socketConnectionClosed() {
    return {
        type: types.SOCKET_CONNECTION_CLOSED,
    };
}

function socketMessage(data) {
    return {
        type: types.SOCKET_MESSAGE,
        data,
    };
}
