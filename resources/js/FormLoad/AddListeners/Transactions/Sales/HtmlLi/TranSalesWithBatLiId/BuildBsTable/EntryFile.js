import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as onExpandRow } from "./onExpandRow/EntryFile.js";
import IconsJson from './icons.json' with {type: 'json'};
import ColumnsJson from '../columns.json' with {type: 'json'};
const tableName = "tableBS";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $(`#${tableName}`);
    let jVarLocalData = localStorage.getItem("tableArray");
    console.log("IconsJson : ", IconsJson);
    $table.bootstrapTable("destroy").bootstrapTable({
        onExpandRow,
        icons: IconsJson,
        detailView: true,
        data: JSON.parse(jVarLocalData),
        columns: ColumnsJson
    });
};

export { StartFunc };
