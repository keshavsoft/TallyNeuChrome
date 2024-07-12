import { StartFunc as StartFuncFromTally } from "./FromTally/EntryFile.js";
const tableName = "tableWithDateBS";

let StartFunc = async () => {
    let jVarLocalShowProgressGifId = document.getElementById('ShowProgressGifId');
    jVarLocalShowProgressGifId.style.display = "";

    let jVarLocalData = await StartFuncFromTally();

    var $table = $(`#${tableName}`);

    $table.bootstrapTable("load", jVarLocalData);

    jVarLocalShowProgressGifId.style.display = "none";
};

const jFLocalInitialize = () => {
    var $table = $(`#${tableName}`);
    let jVarLocalData = localStorage.getItem("tableArray");

    $table.bootstrapTable("load", JSON.parse(jVarLocalData));
};

export { StartFunc };