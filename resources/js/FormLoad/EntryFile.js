import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

let StartFunc = async () => {
    StartFuncAddListeners();
};

export { StartFunc };