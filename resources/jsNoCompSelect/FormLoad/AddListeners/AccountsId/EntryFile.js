import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("AccountsId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };