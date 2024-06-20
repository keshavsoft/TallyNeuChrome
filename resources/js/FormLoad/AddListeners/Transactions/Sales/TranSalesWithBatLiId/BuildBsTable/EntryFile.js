import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import ColumnsJson from '../columns.json' with {type: 'json'};
const tableName = "tableBS";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $(`#${tableName}`);
    let jVarLocalData = localStorage.getItem("tableArray");

    $table.bootstrapTable("destroy").bootstrapTable({
        data: JSON.parse(jVarLocalData),
        columns: ColumnsJson
    });
};

export { StartFunc };
