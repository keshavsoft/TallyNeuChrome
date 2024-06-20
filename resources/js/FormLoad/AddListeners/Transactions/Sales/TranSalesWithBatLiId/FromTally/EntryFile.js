import xmlsNeededJson from '../../../../../../FromTally/xmlsNeeded.json' with {type: 'json'};
import ColumnsJson from '../columns.json' with {type: 'json'};
import { StartFunc as StartFuncXmlToJson } from "./XmlToJson.js";

const CommonParentTagName = "SALES";

let StartFunc = async () => {
    let jVarLocalXml = await jFLocalGetXml();

    let jVarLocalItemData = await FromTally({ inXml: jVarLocalXml });

    let jVarLocalItemsJson = StartFuncXmlToJson({ inXmlFromTally: jVarLocalItemData });

    localStorage.setItem("tableArray", JSON.stringify(jVarLocalItemsJson));
};

let FromTally = async ({ inXml }) => {
    const config = {
        method: 'POST',
        body: inXml
    };

    let r2 = await fetch("http://localhost:9000/", config);
    let d2 = await r2.text();
    // console.log("jVarLocalData /; ", d2);
    return d2;
};

let jFLocalGetXml = async () => {
    let jVarLocalUrl = xmlsNeededJson.Transactions.SalesWithBatches;

    let jVarLocalResponse = await fetch(jVarLocalUrl);
    let jVarLocalData = await jVarLocalResponse.text();
    return jVarLocalData;
};

export { StartFunc };