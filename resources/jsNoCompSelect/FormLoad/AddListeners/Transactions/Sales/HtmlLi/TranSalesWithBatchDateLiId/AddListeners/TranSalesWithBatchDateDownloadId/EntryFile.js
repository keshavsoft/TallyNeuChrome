import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("TranSalesWithBatchDateDownloadId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };