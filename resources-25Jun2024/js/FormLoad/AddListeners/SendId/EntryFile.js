import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("SendId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };