import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
import { StartFunc as StartFuncCheckTally } from "./CheckTally/EntryFile.js";

let StartFunc = async () => {
    StartFuncAddListeners();
    StartFuncCheckTally().then();
};

export { StartFunc };