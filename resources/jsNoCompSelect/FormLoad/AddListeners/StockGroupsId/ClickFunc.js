import xmlsNeededJson from '../../../FromTally/xmlsNeeded.json' with {type: 'json'};
import ColumnsJson from './columns.json' with {type: 'json'};
import { StartFunc as StartFuncFromTally } from "./FromTally/EntryFile.js";

const CommonParentTagName = "STOCKGROUPS";
const CommonTagName = "KSGROUPNAME";

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalShowSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "";
};

let StartFunc = async () => {
    await StartFuncFromTally();

    let jVarLocalItemsJson = localStorage.getItem("tableArray");

    var $table = $('#tableBS');

    $table.bootstrapTable("destroy").bootstrapTable({
        columns: ColumnsJson, data: JSON.parse(jVarLocalItemsJson)
    });

    jFLocalHideSpinner();
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
    let jVarLocalUrl = xmlsNeededJson.StockGroups;

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
        console.log("doc : ", doc);
        let checkboxes = doc.documentElement.querySelectorAll(CommonParentTagName);
        console.log("checkboxes : ", checkboxes);
        checkboxes.forEach((userItem) => {
            let LoopInsideObject = {};
            let LoopInsideName = userItem.querySelector(CommonTagName);

            if (LoopInsideName === null === false) {
                LoopInsideObject.StockGroup = LoopInsideName.innerHTML;
            };

            ReturnArray.push(LoopInsideObject);
        });

    } catch (error) {
        console.log("error : ", error);
    };
    return ReturnArray;
};

export { StartFunc };