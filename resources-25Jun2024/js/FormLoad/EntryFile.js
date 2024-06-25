import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
import { StartFunc as StartFuncCheckTally } from "./CheckTally/EntryFile.js";

let StartFunc = async () => {
    StartFuncCheckTally().then();
    StartFuncAddListeners();
};

export { StartFunc };