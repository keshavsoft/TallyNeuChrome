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

export { StartFunc };