import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("TranSalesBackLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };