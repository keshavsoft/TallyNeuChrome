import { StartFunc as StartFuncXmlToJson } from "./XmlToJson.js";
import { StartFunc as GetXml } from "./GetXml.js";

let StartFunc = async () => {
    let jVarLocalXml = await GetXml();

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
    
    return d2;
};

export { StartFunc };