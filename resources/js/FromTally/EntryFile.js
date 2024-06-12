let StartFunc = async () => {
    document.getElementById("HeadId").addEventListener("click", jFLocalClickFunc);
};

let jFLocalClickFunc = async () => {
    // console.log("------------- ");
    let jVarLocalXml = await jFLocalGetXml();
    // console.log("-------------jVarLocalXml :  ", jVarLocalXml);

    let jVarLocalItemData = await FromTally({ inXml: jVarLocalXml });
    console.log("-------------jVarLocalItemData :  ", jVarLocalItemData);

    let jVarLocalItemsJson = jFLocalXmlToJson({ inXmlFromTally: jVarLocalItemData });
    console.log("jVarLocalItemsJson : ", jVarLocalItemsJson);
    var $table = $('#tableBS');

    $table.bootstrapTable({
        data: jVarLocalItemsJson
    });

    // webSocket.send(JSON.stringify(jVarLocalItemsJson));
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
    const doc = parser.parseFromString(jVarLocalItemsXml.replaceAll("&#4;", ""), "application/xml");

    let checkboxes = doc.documentElement.querySelectorAll("STOCKITEMS");

    checkboxes.forEach((userItem) => {
        let LoopInsideObject = {};
        console.log("userItem : ", userItem);
        let LoopInsideName = userItem.querySelector("KSSTOCKITEMNAME");

        if (LoopInsideName === null === false) {
            LoopInsideObject.ItemName = LoopInsideName.innerHTML;
        };

        let LoopInsideRate = userItem.querySelector("ksstockopeningrate".toUpperCase());

        if (LoopInsideRate === null === false) {
            LoopInsideObject.Rate = LoopInsideRate.innerHTML;
        };

        ReturnArray.push(LoopInsideObject);
    });

    return ReturnArray;
};

StartFunc().then();