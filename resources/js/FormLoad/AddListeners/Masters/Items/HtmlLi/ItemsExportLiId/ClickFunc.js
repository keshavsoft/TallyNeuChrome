import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as FromTally } from "./FromTally/EntryFile.js";

const tableName = "tableBS";

let StartFunc = async () => {
    StartFuncBuildBsTable();
    await FromTally();

    let jVarLocalFromLocalStorage = localStorage.getItem("tableArray");

    var $table = $(`#${tableName}`);

    $table.bootstrapTable("load", JSON.parse(jVarLocalFromLocalStorage));
};

export { StartFunc };