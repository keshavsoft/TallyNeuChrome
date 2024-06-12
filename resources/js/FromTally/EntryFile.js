let StartFunc = async () => {
    document.getElementById("HeadId").addEventListener("click", jFLocalClickFunc);
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalShowSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "";
};

let jFLocalClickFunc = async () => {
    jFLocalShowSpinner();

    let jVarLocalXml = await jFLocalGetXml();

    let jVarLocalItemData = await FromTally({ inXml: jVarLocalXml });

    let jVarLocalItemsJson = jFLocalXmlToJson({ inXmlFromTally: jVarLocalItemData });

    var $table = $('#tableBS');

    $table.bootstrapTable("load", jVarLocalItemsJson);

    jFLocalHideSpinner();
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