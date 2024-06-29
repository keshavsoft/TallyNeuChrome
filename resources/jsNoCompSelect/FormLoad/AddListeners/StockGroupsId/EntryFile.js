import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("StockGroupsId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };