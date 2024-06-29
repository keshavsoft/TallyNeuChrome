import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("MastersLedgersLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };