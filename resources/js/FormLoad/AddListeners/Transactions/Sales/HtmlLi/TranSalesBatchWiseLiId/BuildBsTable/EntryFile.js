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

    $table.bootstrapTable("destroy").bootstrapTable({
        icons: IconsJson,
        detailView: true,
        data: [],
        columns: jFLocalGetVisibleColumns()
    });
};

const jFLocalGetVisibleColumns = () => {
    let jVarLocalAllColumns = ColumnsJson;

    let jVarVisibleColumns = jVarLocalAllColumns.filter(element => {
        return ("visible" in element) === false || element.visible;
    });
    
    return jVarVisibleColumns;
};

export { StartFunc };
