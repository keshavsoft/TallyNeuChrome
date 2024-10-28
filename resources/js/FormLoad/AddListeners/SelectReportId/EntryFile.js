import { StartFunc as changeFunc } from "./changeFunc.js";

let StartFunc = () => {
    console.log("SelectReportId : ", SelectReportId);

    document.getElementById("SelectReportId").addEventListener("change", changeFunc);
};

export { StartFunc };