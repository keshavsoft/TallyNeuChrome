import { StartFunc as CommonFuncs } from "../CommonFuncs/EntryFile.js";
const CommonKeyName = "LEDGERS";
import ColumnsJson from './columns.json' with {type: 'json'};

let StartFunc = async () => {
    await CommonFuncs({
        inKeyName: CommonKeyName,
        inXmlPath: "Tally/xml/SelectCompany/Masters/Ledgers/all.xml",
        inColumnsArray: ColumnsJson
    });
};

export { StartFunc };