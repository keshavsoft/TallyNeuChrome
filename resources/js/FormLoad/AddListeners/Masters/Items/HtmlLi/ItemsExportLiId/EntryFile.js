import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document.getElementById("ItemsExportLiId").addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };