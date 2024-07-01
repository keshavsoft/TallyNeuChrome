import { StartFunc as StartFuncFromTally } from "./FromTally/EntryFile.js";
const tableName = "tableWithDateBS";

let StartFunc = async () => {
    await StartFuncFromTally();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $(`#${tableName}`);
    let jVarLocalData = localStorage.getItem("tableArray");

    $table.bootstrapTable("load", JSON.parse(jVarLocalData));
};

export { StartFunc };