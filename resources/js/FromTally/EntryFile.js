let StartFunc = async () => {
    let jVarLocalXml = await jFLocalGetXml();

    let jVarLocalItemData = await FromTally({ inXml: jVarLocalXml });
    let jVarLocalItemsJson = jFLocalXmlToJson({ inXmlFromTally: jVarLocalItemData });
    console.log("jVarLocalItemsJson : ", jVarLocalItemsJson);
    var $table = $('#table');
    $table.bootstrapTable({
        data: jVarLocalItemsJson
    });
};

let FromTally = async ({ inXml }) => {
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/xml',
            'Content-Type': 'text/xml',
        },
        body: inXml
    };

    let r2 = await fetch("http://localhost:9000/", config);
    let d2 = await r2.text();
    // console.log("jVarLocalData /; ", d2);
    return d2;
};

let jFLocalGetXml = async () => {
    let jVarLocalUrl = "items.xml";

    let jVarLocalResponse = await fetch(jVarLocalUrl);
    let jVarLocalData = await jVarLocalResponse.text();
    return jVarLocalData;

};

const jFLocalXmlToJson = ({ inXmlFromTally }) => {
    let jVarLocalItemsXml = inXmlFromTally;
    let ReturnArray = [];

    const parser = new DOMParser();
    const doc = parser.parseFromString(jVarLocalItemsXml, "application/xml");

    let checkboxes = doc.documentElement.querySelectorAll("STOCKITEMS");

    checkboxes.forEach((userItem) => {
        let LoopInsideObject = {};

        let LoopInsideRate = userItem.querySelector("KSSTOCKITEMNAME");

        if (LoopInsideRate === null === false) {
            LoopInsideObject.ItemName = LoopInsideRate.innerHTML;
        };

        ReturnArray.push(LoopInsideObject);
    });

    return ReturnArray;
};

StartFunc().then();