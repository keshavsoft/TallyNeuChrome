import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("SalesWithBatchesId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };