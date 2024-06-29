import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("MastersItemsLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };