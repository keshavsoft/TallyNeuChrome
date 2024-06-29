import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("TranSalesExportLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };