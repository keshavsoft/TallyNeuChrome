import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("TransactionsLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };