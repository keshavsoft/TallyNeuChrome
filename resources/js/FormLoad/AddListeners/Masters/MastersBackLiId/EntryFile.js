import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("MastersBackLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };