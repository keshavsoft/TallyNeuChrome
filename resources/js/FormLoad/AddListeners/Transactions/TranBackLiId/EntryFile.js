import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("TranBackLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };