import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("TranSalesWithBatLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };