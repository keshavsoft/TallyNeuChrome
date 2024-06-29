import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("MastersLedgersShowLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };