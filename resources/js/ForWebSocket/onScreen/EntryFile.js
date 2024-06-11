import { StartFunc as StartFuncOnlineClass } from "./Online/EntryFile.js";
import { StartFunc as StartFuncMultiChatClass } from "./MultiChat/EntryFile.js";
import { StartFunc as StartFuncChatClass } from "./Chat/EntryFile.js";
import { StartFunc as StartFuncProfileClass } from "./Profile/EntryFile.js";

let StartFunc = (inEvent) => {
    let GetScreen = document.getElementById('container');

    if (GetScreen === null === false) {
        let ScreenClass = GetScreen.className;

        if (ScreenClass === "OnlineClass") {
            StartFuncOnlineClass(inEvent);
        };

        if (ScreenClass === "ChatClass") {
            StartFuncChatClass(inEvent);
        }

        if (ScreenClass === "MultiChatClass") {
            StartFuncMultiChatClass(inEvent);
        }

        if (ScreenClass === "ProfileClass") {
            StartFuncProfileClass(inEvent);
        };
    };
};

export { StartFunc };