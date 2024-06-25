import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("ItemsShowLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };