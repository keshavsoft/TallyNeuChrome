import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("MastersLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };