import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import IconsJson from './icons.json' with {type: 'json'};
import ColumnsJson from '../columns.json' with {type: 'json'};
const tableName = "tableBS";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $(`#${tableName}`);

    $table.bootstrapTable("destroy").bootstrapTable({
        icons: IconsJson,
        data: [],
        columns: ColumnsJson
    });
};

export { StartFunc };
