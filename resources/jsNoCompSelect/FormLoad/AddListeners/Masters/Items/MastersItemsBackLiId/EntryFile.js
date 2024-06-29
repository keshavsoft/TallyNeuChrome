import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("MastersItemsBackLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };