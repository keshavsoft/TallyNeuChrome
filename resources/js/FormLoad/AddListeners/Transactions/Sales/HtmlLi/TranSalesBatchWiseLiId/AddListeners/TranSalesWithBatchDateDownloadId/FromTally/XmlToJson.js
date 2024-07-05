import { StartFunc as HeadWise } from "./HeadWise.js";

const StartFunc = ({ inXmlFromTally }) => {
    let jVarLocalHeadWise = HeadWise({ inXmlFromTally });

    // jVarLocalHeadWise.forEach(element => {
    //     let LoopInsideBatches = element.BatchDetails.toString().split(",");

    //     LoopInsideBatches.forEach(LoopBatch => {
    //         const parser = new DOMParser();
    //         const doc = parser.parseFromString(LoopBatch.replaceAll("&#4;", ""), "text/xml");

    //         console.log("doc : ", LoopBatch.replaceAll("&#4;", ""), doc);
    //     });
    // });

    return jVarLocalHeadWise;
};

export { StartFunc };