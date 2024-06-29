import { StartFunc as StartFuncMyName } from "./onMessage/MyName/EntryFile.js";
import { StartFunc as displayReceivedMessage } from "./onMessage/displayReceivedMessage/EntryFile.js";
import { StartFunc as displayOnlineClients } from "./onMessage/displayOnlineClients/EntryFile.js";

let StartFunc = (inEvent) => {
    const data = JSON.parse(inEvent.data);

    if (data.Type === 'returnOnlineClientsWOMe') {
        displayOnlineClients(data.res);
    };

    if (data.Type === 'GetWebSocketId') {
        localStorage.setItem('webSocketId', data.webSocketId);
    };

    if (data.Type === 'sendMessage') {
        displayReceivedMessage(data);
    };

    if (data.Type === 'ChangeName') {
        StartFuncMyName(data);
    };

};

export { StartFunc };