import { StartFunc as StartFuncFromTally } from "./FromTally/EntryFile.js";
const tableName = "tableWithDateBS";

let StartFunc = async () => {
    await StartFuncFromTally();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $(`#${tableName}`);
    let jVarLocalData = localStorage.getItem("tableArray");
    console.log("aaaaaaa : ", JSON.parse(jVarLocalData));
    $table.bootstrapTable("load", JSON.parse(jVarLocalData));
};


export { StartFunc };