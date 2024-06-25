import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("SalesId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };