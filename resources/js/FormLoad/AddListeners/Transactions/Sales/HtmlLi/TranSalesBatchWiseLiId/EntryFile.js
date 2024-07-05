import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("TranSalesBatchWiseLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };