import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("HeadId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };