import { StartFunc as StartFuncFromTally } from "./FromTally/EntryFile.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalShowSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "";
};

let StartFunc = async () => {
    await StartFuncFromTally();

    StartFuncBuildBsTable();
    // let jVarLocalItemsJson = localStorage.getItem("tableArray");

    // var $table = $('#tableBS');

    // $table.bootstrapTable("destroy").bootstrapTable({
    //     columns: ColumnsJson, data: JSON.parse(jVarLocalItemsJson)
    // });

    // jFLocalHideSpinner();
};

export { StartFunc };