import { StartFunc as StartFunconScreen } from './onScreen/EntryFile.js';
import { StartFunc as StartFunconOpen } from "./onOpen/EntryFile.js";
import UrlJson from './url.json' with {type: 'json'};

let jVarLocalHostName = window.location.host;
let jVarLocalUrlForWS;

if (location.protocol === "https:") {
    jVarLocalUrlForWS = "wss://" + jVarLocalHostName;
}
if (location.protocol === "http:") {
    jVarLocalUrlForWS = "ws://" + jVarLocalHostName;
};

jVarLocalUrlForWS = UrlJson.WebSocketUrl;

// let webSocket;
let StartFunc = () => {
    jFLocalEstablishWebSocket();
};

let jFLocalEstablishWebSocket = () => {
    webSocket = new WebSocket(jVarLocalUrlForWS);

    webSocket.onopen = StartFunconOpen;

    webSocket.onmessage = StartFunconScreen;

    webSocket.onclose = function (e) {
        console.log("Socket is closed. Reconnect will be attempted in 1 second.");
        // document.getElementById("UserNameId").style.color = "red";
    };
};

StartFunc();