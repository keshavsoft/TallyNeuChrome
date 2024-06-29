import xmlsNeededJson from '../../../../FromTally/xmlsNeeded.json' with {type: 'json'};
const CommonParentTagName = "STOCKGROUPS";
const CommonTagName = "KSGROUPNAME";

let StartFunc = async () => {
    let jVarLocalXml = await jFLocalGetXml();

    let jVarLocalItemData = await FromTally({ inXml: jVarLocalXml });

    let jVarLocalItemsJson = jFLocalXmlToJson({ inXmlFromTally: jVarLocalItemData });

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

        let checkboxes = doc.documentElement.querySelectorAll(CommonParentTagName);

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