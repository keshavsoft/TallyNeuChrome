import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("TranSalesAId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };