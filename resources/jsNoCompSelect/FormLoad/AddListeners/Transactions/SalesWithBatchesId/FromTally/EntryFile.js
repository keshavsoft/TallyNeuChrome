import xmlsNeededJson from '../../../../../FromTally/xmlsNeeded.json' with {type: 'json'};
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

const jFLocalXmlToJson = ({ inXmlFromTally }) => {
    let jVarLocalItemsXml = inXmlFromTally;
    let ReturnArray = [];

    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(jVarLocalItemsXml.replaceAll("&#4;", ""), "text/xml");

        let checkboxes = doc.documentElement.querySelectorAll(CommonParentTagName);

        checkboxes.forEach(userItem => {
            let LoopInsideObject = {};

            let k1 = jFLocalLoopColumns({ inTemplateControl: userItem });

            LoopInsideObject = { ...k1 };

            ReturnArray.push(LoopInsideObject);
        });

    } catch (error) {
        console.log("error : ", error);
    };
    return ReturnArray;
};

let jFLocalLoopColumns = ({ inTemplateControl }) => {
    let LoopReturnObject = {};
    let LocalTemplateControl = inTemplateControl;

    ColumnsJson.forEach(element => {
        let LoopInsideObject = jFLocalReturnValue({
            inKeyName: element.tagName,
            inValueName: element.field, inTemplateControl: LocalTemplateControl
        });

        LoopReturnObject = {
            ...LoopReturnObject,
            ...LoopInsideObject
        };
    });

    return LoopReturnObject;
};

let jFLocalReturnValue = ({ inKeyName, inValueName, inTemplateControl }) => {
    let LocalTagName = inKeyName;
    let LocalTemplateControl = inTemplateControl;

    let LoopInsideName = LocalTemplateControl.querySelector(LocalTagName);
    let LoopReturnObject = {};

    if (LoopInsideName === null === false) {
        LoopReturnObject[inValueName] = LoopInsideName.innerHTML;
    };

    return LoopReturnObject;
};

export { StartFunc };