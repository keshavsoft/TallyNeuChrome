import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import IconsJson from './icons.json' with {type: 'json'};
import ColumnsJson from '../columns.json' with {type: 'json'};
const tableName = "tableWithDateBS";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $(`#${tableName}`);
    // let jVarLocalData = localStorage.getItem("tableArray");

    $table.bootstrapTable("destroy").bootstrapTable({
        icons: IconsJson,
        detailView: true,
        data: [],
        columns: ColumnsJson
    });
};

export { StartFunc };
