import { StartFunc as CommonFuncs } from "../Common/WithFilters/EntryFile.js";
import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";

const CommonKeyName = "LEDGERS";
import ColumnsJson from './columns.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalTallyData = await CommonFuncs({
        inKeyName: CommonKeyName,
        inXmlPath: "Tally/xml/SelectCompany/Masters/Ledgers/simple.xml",
        inColumnsArray: ColumnsJson
    });

    let jVarLocalDataToShow = JSON.parse(jVarLocalTallyData).ENVELOPE[CommonKeyName];

    BuildBsTable({
        inData: jVarLocalDataToShow,
        inColumnsArray: ColumnsJson
    });
};

export { StartFunc };