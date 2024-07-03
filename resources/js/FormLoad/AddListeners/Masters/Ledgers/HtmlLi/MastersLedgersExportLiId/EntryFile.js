import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("MastersLedgersExportLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };