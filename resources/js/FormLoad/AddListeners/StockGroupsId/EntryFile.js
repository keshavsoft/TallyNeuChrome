import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("StockCategoryId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };