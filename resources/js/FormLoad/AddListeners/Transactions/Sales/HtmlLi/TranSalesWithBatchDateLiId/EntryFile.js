import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("TranSalesWithBatchDateLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };